import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TimerController } from "../timer.controller";
import { TimerService } from "../timer.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  discount: 42,
  discription: "exampleDiscription",
  endson: new Date(),
  id: 42,
  name: "exampleName",
};
const CREATE_RESULT = {
  discount: 42,
  discription: "exampleDiscription",
  endson: new Date(),
  id: 42,
  name: "exampleName",
};
const FIND_MANY_RESULT = [
  {
    discount: 42,
    discription: "exampleDiscription",
    endson: new Date(),
    id: 42,
    name: "exampleName",
  },
];
const FIND_ONE_RESULT = {
  discount: 42,
  discription: "exampleDiscription",
  endson: new Date(),
  id: 42,
  name: "exampleName",
};

const service = {
  createTimer() {
    return CREATE_RESULT;
  },
  timers: () => FIND_MANY_RESULT,
  timer: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Timer", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TimerService,
          useValue: service,
        },
      ],
      controllers: [TimerController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /timers", async () => {
    await request(app.getHttpServer())
      .post("/timers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endson: CREATE_RESULT.endson.toISOString(),
      });
  });

  test("GET /timers", async () => {
    await request(app.getHttpServer())
      .get("/timers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          endson: FIND_MANY_RESULT[0].endson.toISOString(),
        },
      ]);
  });

  test("GET /timers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/timers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /timers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/timers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        endson: FIND_ONE_RESULT.endson.toISOString(),
      });
  });

  test("POST /timers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/timers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endson: CREATE_RESULT.endson.toISOString(),
      })
      .then(function () {
        agent
          .post("/timers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
