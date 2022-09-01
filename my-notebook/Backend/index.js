const ConnectToMongo = require ('./db')
const express = require ('express')


ConnectToMongo();
const app=express()
const port=1500

app.use(express.json())
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, ()=>{
    console.log(`iNotebook are listen on port ${port}`)
})