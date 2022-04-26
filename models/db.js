
const mongoose=require('mongoose');
const { Schema } = mongoose;

const PhoneSchema = new Schema({
    uname:  String, // String is shorthand for {type: String}
    phname: String,
    date: { type: Date, default: Date.now },
});

const Phonemodel = mongoose.model('Phone', PhoneSchema);

module.exports=Phonemodel