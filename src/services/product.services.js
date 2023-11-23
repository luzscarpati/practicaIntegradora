import { update } from '../controllers/product.controllers.js';
import  ProductDaoMongoDB from '../daos/mongodb/product.dao.js';
const productDao = new ProductDaoMongoDB();

export const getAll = async () => {
    try {
        return await productDao.getAll();
    }catch (error){
        console.log(error);
    };
};

export const getById = async (id) => {
    try {
        const product = await productDao.getById(id);
        if(!product){
            return false;
        }else {
            return product;
        };
    }catch (error){
        console.log(error);
    };
};

export const create = async (obj) => {
    try {
        const newProduct = await productDao.create(obj);
        if(!newProduct){
            return false;
        }else {
            return newProduct;
        }
    }catch(error){
        console.log(error);
    };
};

export const update = async (id, obj) => {
    try{
        const updProduct = await productDao.update(id, obj);
        if(!updProduct){
            return false;
        } else {
            return updProduct;
        };
    }catch (error){
        console.log(error);
    };
};

export const remove = async (id) => {
    try{
        const delProduct = await productDao.delente(id);
        if(!delProduct){
            return false;
        }else {
            return delProduct;
        };
    }catch(error){
        console.log(error);
    };
};