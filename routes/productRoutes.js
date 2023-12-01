const { createProduct, getAllProducts, getProduct, deleteProduct } = require('../controllers/productController');
const router = require('express').Router();

// POST a product
router.post('/', createProduct)

// GET all products
router.get('/', getAllProducts)

// GET a single product
router.get('/:id', getProduct)

// DELETE a product
router.delete('/:id', deleteProduct)

module.exports=router;


