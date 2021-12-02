const express= require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { config } = require('dotenv');

require('dotenv').config();

//import route

//app
const app = express();

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err));


//middleWares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


//route
app.get('/login', (req, res) => {
    res.json({
        data: 'SMS backend is up'
    });
});

//route MiddleWare

//port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));




