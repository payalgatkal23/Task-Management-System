const express=require('express');
const mongoose=require('mongoose');
const userRoutes=require('./routes/userRoutes');

const app=express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/TodoApp')
.then(()=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.error('Error connecting to database:', err);
});

app.use("/",userRoutes);

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
