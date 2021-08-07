// Initialize Firebase
var config =

 {
      apiKey: "AIzaSyBbPk7txK3pzgYnX6pAyZa2alszCd4DMYE",

    authDomain: "bionic-limiter-313511.firebaseapp.com",

    databaseURL: "https://bionic-limiter-313511-default-rtdb.firebaseio.com",

    projectId: "bionic-limiter-313511",

    storageBucket: "bionic-limiter-313511.appspot.com",

    messagingSenderId: "776331433057"
};


firebase.initializeApp(config);

var database =

 firebase.database();

database.ref('/').once('name',

 function(snapshot){
  console.log(snapshot.val());
});



var rootRef = database.ref('/');

rootRef.once('name',

 function(snapshot){
  console.log(snapshot.val());
});

function pushData(){

  var data = document.getElementById("dataname").value;
  var dataRef = database.ref('/name');
  dataRef.set({
    name: data
  });


  var data = document.getElementById("datapass").value;
  var dataRef = database.ref('/password');
  dataRef.set({
    password: data
  });
}

pushDataRef = database.ref("/pushData");

pushDataRef.on("child_added",
 function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});

database.ref('/pushData').once('name', function(snapshot){
  snapshot.forEach(function(data){
    console.log("Below are the child keys of the values in 'pushData'")
    console.log(data.key);
  });
  console.log(Object.keys(snapshot.val()));
});

