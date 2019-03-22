const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exam_db', {useNewUrlParser:true});

const 
 AddonSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        minlength: [3, 'Name cant be less than 3']
    },
    content: { 
        type: String, 
        required: true, 
        minlength: 3 
    }
}, {timestamps:true});

const 
 ItemSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        minlength: [3, 'Title cant be less than 3']
    },
    type: { 
        type: String, 
        required: true, 
        minlength: 3 
    },
    age: { 
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
