import { ProductStrategy } from "./products/validatorProduct";
import { SupplierStrategy } from "./suppliers/validator";
import * as dotenv from "dotenv";
dotenv.config();

export interface ValidatorStrategy {
  validateData(data);
}

let strategy = null;
export const getStrategy = (variable:string): ValidatorStrategy => {
  if (strategy) {
    return strategy;
  }else{
      switch(variable){
          case process.env.SUPPLIER_SINGLETON: {
            strategy = new SupplierStrategy();
            return strategy;
          }
          case process.env.PRODUCT_SINGLETON: {
            strategy = new ProductStrategy();
            return strategy;
          }
      }
  }
};
