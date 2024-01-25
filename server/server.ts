import express from "express";
const app = express();
const PORT = 8800;



app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})