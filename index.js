import express from "express";
import data from "./data/MOCK.json" assert {type: "json"};
const app = express();

const PORT = 3000;

//app.use(express.static("public"))

//app.use('/images',express.static("images"))


///
app.use(express.json())

app.post('/item',(req,res)=>{
    console.log(req.body)
    res.send(req.body)

})
///

app.get('/',(req,res)=>{
    res.json(data)

});



//GET with next
app.get('/next',(req,res,next)=>{
    console.log('response will be sent by the next function');
    next();
},(req,res)=>{
    res.send('I just set up a route with a second callback.')
}
)


// GET with routing parameters
app.get('/class/:id',(req,res)=>{
    const studentId = Number(req.params.id);
    const student = data.filter((student) => student.id === studentId)
    res.send(student)
})


app.post('/create',(req,res)=>{
    res.send('This is a post request')

});
app.put('/edit',(req,res)=>{
    res.send('This is a put request')

});

app.delete('/remove',(req,res)=>{
    res.send('This is a delete request')

});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    

});
