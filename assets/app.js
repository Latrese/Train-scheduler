

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
  
    var trainName = "";
    var destination = "";
    var trainTime = "";
    var frequency = "";
    
$('.submit-button').on('click', function(event) {
  event.preventDefault();

  trainName = $('#trainName').val().trim();
  destination = $('#destination').val().trim();
  trainTime = $('#trainTime').val().trim();
  frequency = $('#frequency').val().trim();

  db.ref().push({
    trainName : trainName,
    destination : destination,
    trainTime : trainTime,
    frequency : frequency,  
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })

  db.ref().on("child_added", function(childSnapshot){
    var newTrain = snapshot.val();
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().trainTime);
    console.log(childSnapshot.val().frequency);

  })
  
  db.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
    $('#trainName-display').text(snapshot.val().trainName);
    $('#destination-display').text(snapshot.val().destination);
    $('#trainTime-display').text(snapshot.val().trainTime);
    $('#frequency-display').text(snapshot.val().frequency);
  })

})
});