const add = (a, b) => {
    return a+b;
}

const err = () => {
    throw new Error('I am a new error');
}

const arr = () => {
    return ['Bat'];
}

const newPromise = (a,b) => {
    return new Promise((res, rej) => {
        if(a-b>0) {
            res('Positive');
        }else {
            rej('Negative');
        }
    });
}

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/users', (req, res)=> {
    res.status(200).json({
        users: [
            {
                name : "asdfsdv",
                email : "dshfhjsjdk@gmail.com",
                password : "akuhgfua123"
            }
        ]
    })
})
module.exports = {
    add,
    err,
    arr,
    app,
    newPromise
}