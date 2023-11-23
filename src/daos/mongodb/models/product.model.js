import { Schema, model } from "mongoose";

export const productCollection = "product";
const productsSchema = new Schema({
    name: { type: String, require: true },
    description: {type: String, require: true},
    price: { type: Number, require: true },
    stock: { type: Number, require: true }
});

export const ProductModel = model(
    productCollection,
    ProductModel
);