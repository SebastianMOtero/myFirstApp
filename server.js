const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cities = require('./routes/api/cities');
const itinerary = require('./routes/api/itinerary');
const cors = require('cors')

const app = express();
app.use(cors());
//Bodyparser middleware
app.use(bodyParser.json());

//gain uri string
const mongoURI = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true, })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use('/api', cities);
app.use('/api', itinerary);
//app.use(bodyParser.json());



// router.get('/test', (req, res) => {
//     res.send("HELLO WORLD 23");
// });
//
//le pasa a express el cuerpo de la solicitud como json

// HTTP Verb   Operation
// GET         Read
// POST        Create
// PUT         Update 
// DELETE      Delete 

// mongoose.connect(uri, {useNewUrlParser: true});

// const schema = mongoose.Schema;

app.listen(port, () => console.log(`Listening on port ${port}`));