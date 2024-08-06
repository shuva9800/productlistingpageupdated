const Product= require('../model/product.model');



exports.listingProduct = async (req,res)=>{
    console.log(req.body)
    try{
        const productlist = await Product.create(req.body);
        return res.status(200).json(productlist);
    }
    catch(error){
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

//get all listing items

exports.allListingItems = async(req,res)=>{
    try{
        const allItems= await Product.find();
        return res.status(200).json(allItems);
    }
    catch(error){
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}