const {Router}=require('express')

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyD0fM1nw6Gsth6WqZVGheBXeA3jZ4_mCZc",
  authDomain: "bdbtest-2028d.firebaseapp.com",
  databaseURL: "https://bdbtest-2028d.firebaseio.com",
  projectId: "bdbtest-2028d",
  storageBucket: "bdbtest-2028d.appspot.com",
  messagingSenderId: "419969431614",
  appId: "1:419969431614:web:dc7e32b591a3b95755f96f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//var database = firebase.database();

let bodyParser = require('body-parser')
const router = Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

router.get('/read',(req,res) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  firebase.database().ref('Employee')
  .once('value')
  .then( (snapshot)=> {
    res.json(snapshot.val())
  })
})
router.post('/create',(req,res) => {
  if (req.body.name!=null) {
    firebase.database().ref('Employee')
    .push({fullname: req.body.name,})
    .then((snapshot)=>{res.json(req.body)})
  }else {
    res.status(500).send('Error name is undefined')
  }
})
router.post('/delete',(req,res) => {
  if (req.body.key!=null) {
    firebase.database().ref('Employee').child(req.body.key).set({})
    .then((snapshot)=>{
      res.json({"message":"deleted"})
    })
  }else {
    res.status(500).send('Error name is undefined')
  }
})

module.exports=router
