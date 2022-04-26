const mongoose=require('mongoose');
const { Schema } = mongoose;


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Phondb');
}

const PhoneSchema = new Schema({
    uname:  String, // String is shorthand for {type: String}
    phname: String,
    // date: { type: Date, default: Date.now },
});

const Phonemodel = mongoose.model('Phone', PhoneSchema);

 newphone1=new Phonemodel({uname:'Bio',phname:'huawei'});
newphone1.save();