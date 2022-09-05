import {
  ProductRoute,
  ProductOnlineRoute,
  ProductStoreRoute,
  StoreRoute,
} from "./controllers";
import { Product, ProductOnline, ProductStore, Store } from "./models";

export const controllers = [
  ProductRoute,
  ProductOnlineRoute,
  ProductStoreRoute,
  StoreRoute,
];

export const model = [Product, ProductOnline, ProductStore, Store];
