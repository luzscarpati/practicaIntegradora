import * as service from "../services/product.services.js"

export const getAll = async (req, res, next) => {
    try{
        const response = await service.getAll();
        res.status(200).json(response);
    }catch(error){
        next(error.message);
    };
};

export const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.getById(id);
        if (!response){
            res.status(404).json({msg: "Product Not found!"});
        } else {
            res.status(200).json(response);
        };
    }catch(error){
        next(error.message);
    };
};

export const create = async (req, res, next) => {
    try{
        const newProduct = await service.create(req.body);
        if (!newProduct) {
            res.status(404)-json({ msg: "Error create product" });
        }else {
          res.status(200).json(newProduct);
        };
    }catch(error){
        next(error.message);
    };
};

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updProduct = await service.update(id, req.body);
        if(!updProduct) {
            res.status(404).json({msg: "Error update product"});
        }else {
            res.status(200).json(updProduct);
        };
    }catch(error){
    next(error.message);       
    };
};

export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const delProduct = await service.remove(id);
        if(!delProduct){
            res.status(404).json({msg: "Error delete product"});
        }else {
            res.status(200).json({ msg: `Product id: ${id} deleted`});
        };
    }catch (error) {
        next(error.message);
    };
};