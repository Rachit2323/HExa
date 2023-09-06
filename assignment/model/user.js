const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    id:{
        type:Number,
        // required:true
    },
    name:{
        type:String,
        // required:true
    },
    username:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    address:{
        street:{
            type:String,
        },
        suite:{
            type:String,
        },
        zipcode:{
            type:String,
        },
        geo:{
            lat:{
                type:String
            },
            lng:{
                 type:String,
            }
        }
    },
    phone:{
        type:String
    },
    website:{
        type:String
    },
    company:{
        name:{
            type:String
        },
        catchPhrase:{
            type:String
        },
        bs:{
            type:String
        }
    }

})

const dataModel=mongoose.model('data',userSchema);
module.exports=dataModel;