import { request, Request, Response } from "express"
import ProductCategory from "../models/category"
import Product, { ProductInterface } from "../models/product"
import validatorProduct from "../validators/products/validatorProduct"

export const allProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find()
        res.send(products)
    } catch (err) {
        res.send(err)
    }
}

export const getOneProduct = async (req: Request, res: Response): Promise<void> => {

    try {
        const product = await Product.find({ id: Number(req.params.id) })
        res.send(product)
    } catch (err) {
        res.send(err)
    }

}

export const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const productObject : ProductInterface = req.body;
        validatorProduct(productObject);
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.send(savedProduct)
    } catch (err) {
        res.send(err)
    }
}

export const updateProduct = async (req: Request, res: Response) :Promise<void> => {
    try {
        const productObject : ProductInterface = req.body;
        validatorProduct(productObject);
        const product = await Product.findOneAndUpdate({ id: Number(req.params.id) }, req.body, { new: true })
        res.send(product)
    } catch (err) {
        res.send(err)
    }

}


export const deleteProduct = async (req: Request, res: Response) :Promise<void> => {
    try {
        const product = await Product.deleteMany({ id: Number(req.params.id) }, { new: true })
        res.send("Product deleted")
    } catch (err) {
        res.send(err)
    }

}


export const getProductCategory = async (req: Request, res: Response) :Promise<void> => {
    try {
        const product = await Product.find({ category: Number(req.params.category) })
        res.send(product)
    } catch (err) {
        res.send(err)
    }
}

export const addProductByCategory = async (req: Request, res: Response) :Promise<void> => {
    await ProductCategory.exists({ id: Number(req.params.category) }, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            if (result) {
                const product = new Product(req.body)
                product.category = Number(req.params.category);
                product.save((err: any) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send(product)
                    }
                })
            } else {
                res.send("Invalid category!")
            }
        }
    })
}