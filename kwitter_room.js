
const firebaseConfig = {
      apiKey: "AIzaSyDQfEK_apXPhOBMSJ0V3OuDsYrbKhkf100",
      authDomain: "kwitter-d55a8.firebaseapp.com",
      projectId: "kwitter-d55a8",
      storageBucket: "kwitter-d55a8.appspot.com",
      messagingSenderId: "489835525325",
      appId: "1:489835525325:web:71b3ef6cd7718d8dc2e584"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
