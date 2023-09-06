const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");


const app =express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/hexa",{
    useUnifiedTopology:true
}).then(()=>console.log("mongoose is connected"));

app.use("/mine",require("./router/user"));
const PORT=4000;

app.listen(PORT,()=>console.log(`Servr is running on PPORT ${PORT}`));
