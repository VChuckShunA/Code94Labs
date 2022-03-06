const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Please enter product name'],
    trim: true,
    maxLength:[100, 'Product name cannot exceed 100 characters']
  },
  price:{
    type: Number,
    required: [true, 'Please enter product price'],
    maxLength:[5, 'Product price cannot exceed 5 characters'],
    default: 0.0 //The price is set to zero by default and if you create a product without the price, it will be set to 0
  },
  description:{
    type: String,
    required: [true, 'Please enter product description']
  },
   SKU:{
    type: String,
    required: [true, 'Please enter product SKU']
  },
  images:[
    {
      public_id:{
        type: String,
        required:true
      },
      url:{
        type: String,
        required:true
      }
    }
  ],
  user:{
    type:mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
     quantity:{
          type:Number, 
          required:[true,'Please enter product stock'],
          maxLength:[5,'Product stock cannot exceed 5 for some reason lol'],
          default:0
     }
})

module.exports= mongoose.model('Product', productSchema);


/*
{
    "name":"",
    "price":"",
    "SKU":"",
    "description":"",
    "images":[
      {
        "public_id":"",
        "url": ""
      }
    ],
    "quantity":0
  }
*/
