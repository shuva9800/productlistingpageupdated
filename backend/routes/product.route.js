const express = require('express');
const { listingProduct, allListingItems } = require('../controller/product.controller');
const router = express.Router()


router.post('/listingproduct',listingProduct);
router.get('/getproduct',allListingItems);



module.exports = router