const express=require("express");
const app=express();
const path=require("path");

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,"/public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
  res.render("cryptestein.ejs")
}) 

app.get("/about",(req,res)=>{
  res.render("about.ejs")
}) 

app.get("/encrypt",(req,res)=>{
  res.render("encrypt.ejs")
}) 

app.get("/decrypt",(req,res)=>{
  res.render("decrypt.ejs")
}) 

app.get("/bruteforce",(req,res)=>{
  res.render("bruteforce.ejs")
}) 

app.get("/additive/additiveEncrypt",(req,res)=>{
  res.render("additive/additiveEncrypt.ejs")
})

app.get("/multiplicative/multiplicativeEncrypt",(req,res)=>{
  res.render("multiplicative/multiplicativeEncrypt.ejs")
})

app.get("/autokey/autokeyEncrypt",(req,res)=>{
  res.render("autokey/autokeyEncrypt.ejs")
})

app.get("/rsa/rsaEncrypt",(req,res)=>{
  res.render("rsa/rsaEncrypt.ejs")
})

app.get("/affine/affineEncrypt",(req,res)=>{
  res.render("affine/affineEncrypt.ejs")
})


app.get("/additive/additiveDecrypt",(req,res)=>{
  res.render("additive/additiveDecrypt.ejs")
})

app.get("/multiplicative/multiplicativeDecrypt",(req,res)=>{
  res.render("multiplicative/multiplicativeDecrypt.ejs")
})

app.get("/autokey/autokeyDecrypt",(req,res)=>{
  res.render("autokey/autokeyDecrypt.ejs")
})

app.get("/rsa/rsaDecrypt",(req,res)=>{
  res.render("rsa/rsaDecrypt.ejs")
})

app.get("/affine/affineDecrypt",(req,res)=>{
  res.render("affine/affineDecrypt.ejs")
})


app.get("/additive/additiveBrute",(req,res)=>{
  res.render("additive/additiveBrute.ejs")
})

app.get("/multiplicative/multiplicativeBrute",(req,res)=>{
  res.render("multiplicative/multiplicativeBrute.ejs")
})

app.get("/autokey/autokeyBrute",(req,res)=>{
  res.render("autokey/autokeyBrute.ejs")
})

app.get("/rsa/rsaBrute",(req,res)=>{
  res.render("rsa/rsaBrute.ejs")
})

app.get("/affine/affineBrute",(req,res)=>{
  res.render("affine/affineBrute.ejs")
})


const port=process.env.PORT||3000;
app.listen(port,()=>{
  console.log(`App is listening on port ${port}`);
})