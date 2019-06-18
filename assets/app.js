

  $(function() {
    var firebaseConfig = {
      apiKey: "AIzaSyCZyOjjoAIrxOIH6RI9WRtA10BgcfchGwg",
      authDomain: "my-train-project-88054.firebaseapp.com",
      databaseURL: "https://my-train-project-88054.firebaseio.com",
      projectId: "my-train-project-88054",
      storageBucket: "",
      messagingSenderId: "112256562833",
      appId: "1:112256562833:web:7eeb433a50a6e796"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var db = firebase.database();
    var trainRef = db.ref("/train")
    
    $(".submit-button").on("click", function(event){
      event.preventDefault();
      console.log("i was clicked")
      var trainName = $("trainName").val()

      trainRef.push({
        trainName : trainName
      })
      })
});