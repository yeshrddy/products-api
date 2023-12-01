const Product = require('../models/productModel');
const ApiFeatures = require('../utils/ApiFeatures');

const getAllProducts = async (req, res)=> {
    try {
        // Initialize the base query with the Product model
        const features=new ApiFeatures(Product.find(),req.query)
        .filter().page ();

        // Execute the query after applying all modifications
        const allProducts = await features.query;
        res.status(200).json({
            status:'success',
            count: allProducts.length,
            data: allProducts
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message: error.message
        })
    }
}

const createProduct= async (req,res)=>{
    try {
        let newProduct = await Product.create(req.body);
        res.status(200).json({
            status:'success',
            data:{
                product:newProduct
            }
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:error.message
        })
    }
}

const getProduct = async (req, res)=> {
    try {
        const id = req.params.id;
        let product = await Product.findById(id)
        res.status(200).json({
            status:'success',
            data: {
                product
            }
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:error.message
        })
    }
}

const deleteProduct = async (req, res)=> {
    try {
        const id = req.params.id;
        let product = await Product.findByIdAndDelete(id)
        res.status(200).json({
            status:'success',
            data: {
                product
            }
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:error.message
        })
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    deleteProduct
}
