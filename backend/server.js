const express = require('express'); //pangtawag sa express package
const cors = require('cors'); //pangtawag sa cors package
const mongoose = require('mongoose'); //pangtawag sa mongoose package

require('dotenv').config() //pangtawag sa dotenv package

const app = express(); //paginstantiate : creation of an object
const port = process.env.PORT || 5000; //5000 as default or kahit anong port na bakante

//middleware
app.use(cors()); //gagamitin na yung cors dun sa application
app.use(express.json()); //kasi di nakadefault na json format yung mga data sa node js

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})