const express=require('express');
const mongoose=require('mongoose');
const cors=require("cors");
const studentmodel=require('./models/students');
const bcrypt=require("bcryptjs");

const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://himeshsrivastava123:rk9RUCdC3aJsdqWA@cluster0.aqzjeb9.mongodb.net/E-commerence",)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error: ', err));

app.post("/signin",async(req,res)=>{
         try {
            const {email,password}=  req.body;
            const response=await studentmodel.findOne({email:email});
                   if(response){
                        if(response.password===password){
                         res.json("success");
                        }
                        else{
                         res.json("password is incorrect");
                        }
                   }
                   else{
                         res.json("No record exits");
                   }
                 
         } catch (error) {
            console.log(error);
         }
})

app.post("/register",async(req,res)=>{
      try {
            console.log('Incoming request:', req.body); 
            const {name, email, password}=req.body;
            const salt=await bcrypt.genSalt(10);
            const hashpassword=await bcrypt.hash(password,salt);
            const newStudent = new studentmodel({
                  name,
                  email,
                  password:hashpassword,
            }); 

            const result = await newStudent.save();        
            console.log('Student saved successfully:', result);
            res.status(201).json(result);                  
          } catch (err) {
            res.status(500).json({ error: err.message });  
          }
})

app.listen(8000,()=>{
      console.log('server is ready');
})