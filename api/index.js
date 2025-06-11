import express from  "express"

const app = express();

app.get('/', function(req,res){
    res.send("hey")
})

app.listen(3000, ()=>{
    console.log('Server running on PORT 3000')
})