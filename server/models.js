const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exam_db', {useNewUrlParser:true});

const 
 AddonSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: false, 
       
    },
    content: { 
        type: String, 
        required: false, 
    },
    skill3: { 
        type: String, 
        required: false, 
    }
}, {timestamps:true});

const 
 ItemSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true,'Name is required'], 
        minlength: [3, 'Name cant be less than 3']
    },
    type: { 
        type: String, 
        required: [true,'Type is required'], 
        minlength: [3, 'Type cant be less than 3']
    },
    description: { 
        type: String, 
        required: [true,'Description is required'], 
        minlength: [3, 'Description cant be less than 3']
    },
    likes: { 
        type: Number, 
        required: false 
    },
    // addons: { 
    //     type: Array, 
    //     required: false 
    // },
    addons: [AddonSchema]
}, {timestamps:true});

module.exports ={
 Item: mongoose.model('Item', ItemSchema),
 Addon: mongoose.model('Addon', AddonSchema)
}
