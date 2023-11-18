import Product from "../models/productmodel.js";
//@desc fetch all products
//@route GET/api/products
//@access public

const getProducts = async (req,res)=>{
   const products = await Product.find({});
   res.json(products);
};

//@desc fetch a products
//@route GET/api/products/:id
//@access public

const getProductById = async (req,res)=>{
    const product = await Product.findById(req.params.id);     
  
    if (product){   
        return res.json(product);
    }else {
      res.status(404);
   throw new Error(`Resource not found`);
    }
 };

 export {getProducts, getProductById};