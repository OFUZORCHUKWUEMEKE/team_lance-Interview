const { getProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/product')
const verifyToken = require('../middleware/auth')

const router = require('express').Router()

router.get('/',getProduct)

router.post('/',addProduct)

router.patch('/:id',updateProduct)

router.delete('/:id',deleteProduct)


module.exports = router