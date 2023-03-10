const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const app=express();
const cors=require("cors");

//import trouts
const postRoutes=require('./routes/posts')
mongoose.set('strictQuery', true);

//app midleware
app.use(bodyParser.json());
app.use(cors());
app.use(postRoutes);

const PORT=8026;
const DB_URL ='mongodb+srv://sachinMudan:<password>@cluster0.imeuuuw.mongodb.net/student_db?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUniFiedTopology:true
})

mongoose.connect(DB_URL)
.then(()=>{
    console.log("Database Success ;) ");})
    .catch((err)=>console.log('Database connection error',err));

app.listen(PORT,()=>{
    console.log(`APP IS RUNNING ${PORT}`);
});
