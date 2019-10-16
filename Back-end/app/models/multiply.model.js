const mongoose = require('mongoose');

const calculateSchema=mongoose.Schema({
    div1:{
        type:Number,
        required:'Box cant be Empty'
    },
    div2:{
        type:Number,
        required:'Box cant be Empty'
    },
    result:{
        type:Number,
    }
})

module.exports = mongoose.model('Calculate', calculateSchema);