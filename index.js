const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000;

// const handler = (req, res) => {
//     res.send('Hello from node');
// }

// app.get('/', handler);

// or

//localhost er url e kono extra kichu na dile eita  page e show kore
app.get('/', (req, res) => {
    res.send('Hello From Node again and express')
})

const users = [
    { id: 0, name: "shabana", email: "shbana@gmail.com" },
    { id: 1, name: "rujina", email: "rujina@gmail.com" },
    { id: 2, name: "srabonti", email: "srabonti@gmail.com" },
    { id: 3, name: "purnima", email: "purnima@gmail.com" },
    { id: 4, name: "popy", email: "popy@gmail.com" },
]

//localhost er url e extra like '/users' eta dile oi page e eta show korbe..ager ta korbe na
app.get('/users', (req, res) => {

    //using query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
    
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log("hitting the post",req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic router vabe
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
  
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("moja moja moja fazli")
})


app.listen(port, () => {
    console.log("listening to port", 3000);
})