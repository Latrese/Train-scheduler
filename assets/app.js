

  $(function() {
    var firebaseConfig = {
      apiKey: "AIzaSyCZyOjjoAIrxOIH6RI9WRtA10BgcfchGwg",
      authDomain: "my-train-project-88054.firebaseapp.com",
      databaseURL: "https://my-train-project-88054.firebaseio.com",
      projectId: "my-train-project-88054",
      storageBucket: "my-train-project-88054.appspot.com",
      messagingSenderId: "112256562833",
      appId: "1:112256562833:web:7eeb433a50a6e796"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var db = firebase.database();
    
$('.submit-button').on('click', function(event) {
  event.preventDefault();
  var trainName = $('#trainName').val();
  var destination = $('#destination').val();
  var trainTime = $('#trainTime').val();
  var frequency = $('#frequency').val();

  var newTrain = {
    trainName : trainName,
    destination : destination,
    trainTime : trainTime,
    frequency : frequency
  }
 db.ref().push(newTrain);
  console.log(trainName)

})
});