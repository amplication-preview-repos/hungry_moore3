import { ProductVariant as TProductVariant } from "../api/productVariant/ProductVariant";

export const PRODUCTVARIANT_TITLE_FIELD = "sku";

export const ProductVariantTitle = (record: TProductVariant): string => {
  return record.sku?.toString() || String(record.id);
};
