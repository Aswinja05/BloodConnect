const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

app.use(cors({ origin: 'http://localhost:5000' }));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(express.static(__dirname + "/public"));


//DATABASE
mongoose.connect('mongodb+srv://admin:Admin123@donortrack.fr6p2.mongodb.net/DonorTrackDB?retryWrites=true&w=majority'
, {})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


    const donorsSchema = new mongoose.Schema({
      donorName: String,
      donorPhone: String,
      donorEmail: String,
      donorAge: Number,
      donorBloodGroup: String,
      isVerified: Boolean,
      dtCoins: Number,
      locations: [
        {
          label: String,
          latitude: Number,
          longitude: Number
        }
      ]
  });
  const Donor = mongoose.model('donors', donorsSchema)






//API ENDPOINTS
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/main/index.html');
})





<<<<<<< HEAD
//Calling api
=======

//Calling api comment
>>>>>>> 5b0160fb5f95aa141f7b7c8010e01a9fa05840ca

// const accountSid = "AC122f8454ba8f1b48cc924acfd3e1e133";
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require("twilio")(accountSid, authToken);

// client.calls.create({
//   url: "http://demo.twilio.com/docs/voice.xml",
//   to: "+919902227821",
//   from: "+17753699722",
// })
// .then(call => console.log(call.sid));



app.listen(3000,()=>{
    console.log(`Running in 3000`)
})