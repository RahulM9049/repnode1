const express=require("express");
const cors=require("cors");

const app=express();

app.use(cors("*"));
app.use(express.json());
app.get('/', (request,response)=>{

    response.send("Welcome User.....");
})

app.listen(3001,() =>{
    console.log("Port started at 3001")
})