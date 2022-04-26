var express = require('express');
const mongoose = require('mongoose');
const Phonemodel=require('./models/db');
var methodOverride = require('method-override');
var app = express();

var bodyParser=require('body-parser');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'))


// mongoose connection
// getting-started.js


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Phondb');
}

// newphone1=new Phonemodel({uname:'Bio',phname:'nokia'});
// newphone1.save();
// use res.render to load up an ejs view file

// index page

app.get('/phone', async (req, res)=>{
 const phonemodels= await Phonemodel.find();
res.render('phone',{phonemodels});

});


app.get('/phone/new', (req, res)=> {
res.render('new');
});

app.post('/phone',async(req,res)=>{
 const phonemodels= await new Phonemodel({uname:req.body.name,phname:req.body.phone});
 phonemodels.save();
 res.redirect('/phone');
})

app.get('/phone/:id/show',async(req,res)=>{
  const {id} = req.params;
 const phonemodel =await Phonemodel.findById(id);
  res.render('show',{phonemodel})
})
app.get('/phone/:id/update', async(req,res)=>{
  const {id}=req.params;
 const phonemodel =await Phonemodel.findById(id);
res.render('update',{phonemodel})
})

app.put('/phone/:id/update',async(req,res)=>{
  const {id}=req.params;
  const phonemodel =await Phonemodel.findByIdAndUpdate(id,{uname:req.body.name,phname:req.body.phone});
  // console.log(req.body)
  res.redirect(`/phone/${phonemodel._id}/show`);
})

app.delete('/phone/:id/delete',async(req,res)=>{
  const {id} = req.params;
  const phonemodel=await Phonemodel.findByIdAndDelete(id);
  res.redirect('/phone');

})






app.listen(3000);
console.log('Server is listening on port 3000');