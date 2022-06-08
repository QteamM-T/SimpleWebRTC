import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {getDatabase,update,get,ref,child,onValue} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

// var firebaseConfig = {
//   apiKey: "AIzaSyDWrQ1W5VzXHWyhdwuKanAa3v54ZZkTrXA",
//   authDomain: "web-project-dba45.firebaseapp.com",
//   databaseURL: "https://web-project-dba45-default-rtdb.firebaseio.com",
//   projectId: "web-project-dba45",
//   storageBucket: "web-project-dba45.appspot.com",
//   messagingSenderId: "51222755406",
//   appId: "1:51222755406:web:50a4f207390aee287b2b1f"
// };
// firebase.initializeApp(firebaseConfig);


const firebaseConfig = {
    apiKey: "AIzaSyDWrQ1W5VzXHWyhdwuKanAa3v54ZZkTrXA",
    authDomain: "web-project-dba45.firebaseapp.com",
    databaseURL: "https://web-project-dba45-default-rtdb.firebaseio.com",
    projectId: "web-project-dba45",
    storageBucket: "web-project-dba45.appspot.com",
    messagingSenderId: "51222755406",
    appId: "1:51222755406:web:50a4f207390aee287b2b1f"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app);
const auth = getAuth();



var tbody=document.getElementById('tablebody');
function AddItemToTable(email){
   let params = new URLSearchParams(location.search);
   var username  = params.get('username')
   console.debug("Nothing in table" + username + email);
   if(email != username){
      let trow=document.createElement('tr');
      let td1=document.createElement('td');

      td1.innerHTML=email;
      trow.appendChild(td1);
      tbody.appendChild(trow);
   }
}

function AddAllItemsToTable(TheUser){
    tbody.innerHTML="";
    TheUser.forEach(element => {
   
        AddItemToTable(element.email);
    });

   for (var i = 0; i < tbody.rows.length; i++) {
          for (var j = 0; j < tbody.rows[i].cells.length; j++)
          tbody.rows[i].cells[j].onclick = function () {
              tableText(this);
          };
    }
  
}
function tableText(tableCell) {
   var callToUsername = tableCell.innerHTML;
	var proceed = confirm("Do you really want call " + callToUsername);
   if (proceed){

      if (callToUsername.length > 0) { 
	
         connectedUser = callToUsername;
         
         // create an offer s
         yourConn.createOffer(function (offer) { 
            send({ 
               type: "offer", 
               offer: offer 
            }); 
            
            yourConn.setLocalDescription(offer); 
         }, function (error) { 
            alert("Error when creating an offer"); 
         });
   }
		
   } 



}


function GetAllDataOnce(){
    const dbref=ref(db);

    get(child(dbref, "users")).then((snapshot)=>{
        var allusers =[];

        snapshot.forEach(childSnapshot=>{
            allusers.push(childSnapshot.val());
        });
        AddAllItemsToTable(allusers);
    });
}

function GetAllDataRealtime(){
    const dbref=ref(db,"users");

    onValue(dbref,(snapshot)=>{
        var allusers =[];

        snapshot.forEach(childSnapshot=>{
            allusers.push(childSnapshot.val());
        });
        AddAllItemsToTable(allusers);
    })

    // get(child(dbref, "users")).then((snapshot)=>{
    //     var allusers =[];

    //     snapshot.forEach(childSnapshot=>{
    //         allusers.push(childSnapshot.val());
    //     });
    //     AddAllItemsToTable(allusers);
    // });
}

window.onload=GetAllDataRealtime;

//logout
onAuthStateChanged(auth, (user) => {
    if (user) {
      
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

logout.addEventListener('click',(e)=>{
    
    signOut(auth).then(() => {
        window.open("index.html","_self");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    });
});





//our username 


var name; 
var connectedUser;
  
//connecting to our signaling server
var conn = new WebSocket('ws://192.168.8.105:9090');
  
conn.onopen = function () { 
   console.log("Connected to the signaling server");

   let params = new URLSearchParams(location.search);
   var name = params.get('username') ;
   // console.log("LOGIN" + name);

   const text = document.createTextNode("Welcome " + name);
   const pNode = document.getElementById("p");
   pNode.appendChild(text);


   if (name.length > 0) { 
      send({ 
         type: "login", 
         name: name 
      }); 
   }

   	
   const constraints = {
               'video': true,
               'audio': true
           }
   navigator.mediaDevices.getUserMedia(constraints)
         .then(stream => {
               console.log('Got MediaStream:', stream);
             
               localVideo.srcObject = stream;
               localVideo.muted=true;

               var configuration = { 
                      "iceServers": [{ "url": "stun:stun2.1.google.com:19302" }]
                }; 

                //yourConn = new webkitRTCPeerConnection(configuration); 
                yourConn = new RTCPeerConnection(configuration);
               // setup stream listening 
               yourConn.addStream(stream); 
               
               //when a remote user adds stream to the peer connection, we display it 
               yourConn.onaddstream = function (e) { 
                  // remoteVideo.src = window.URL.createObjectURL(e.stream); 
                  remoteVideo.srcObject = e.stream; 
               };
               
               // Setup ice handling 
               yourConn.onicecandidate = function (event) { 
                  if (event.candidate) { 
                     send({ 
                        type: "candidate", 
                        candidate: event.candidate 
                     }); 
                  } 
               };  
                      

         })
         .catch(error => {
               console.error('Error accessing media devices.', error);
         });

         
      

      //********************** 
      //Starting a peer connection 
      //********************** 
		
      //getting local video stream 
   //    navigator.webkitGetUserMedia({ video: true, audio: true }, function (myStream) { 
   //      stream = myStream; 

      
      
      
   //    //displaying local video stream on the page 
          
      
   //       localVideo.src = window.URL.createObjectURL = (stream) => {
   //          args.video.srcObject = stream;
   //          return stream;
   //       };
         


   //       //using Google public stun server 
   //       var configuration = { 
   //          "iceServers": [{ "url": "stun:stun2.1.google.com:19302" }]
   //       }; 
			
   //       yourConn = new webkitRTCPeerConnection(configuration); 
			
   //       // setup stream listening 
   //       yourConn.addStream(stream); 
			
   //       //when a remote user adds stream to the peer connection, we display it 
   //       yourConn.onaddstream = function (e) { 
   //          remoteVideo.src = window.URL.createObjectURL(e.stream); 
   //       };
			
   //       // Setup ice handling 
   //       yourConn.onicecandidate = function (event) { 
   //          if (event.candidate) { 
   //             send({ 
   //                type: "candidate", 
   //                candidate: event.candidate 
   //             }); 
   //          } 
   //       };  
			
   //    }, function (error) { 
   //       console.log(error); 
   //    }); 
		
};
  
//when we got a message from a signaling server 
conn.onmessage = function (msg) { 
   console.log("Got message", msg.data);
   
   var data = JSON.parse(msg.data); 
	
   switch(data.type) { 
      case "login": 
         //  console.log("LOGIN");
         handleLogin(data.success); 
         break; 
      //when somebody wants to call us 
      case "offer": 
         handleOffer(data.offer, data.name); 
         break; 
      case "answer": 
         handleAnswer(data.answer); 
         break; 
      //when a remote peer sends an ice candidate to us 
      case "candidate": 
         handleCandidate(data.candidate); 
         break; 
      case "leave": 
         handleLeave(); 
         break; 
      default: 
         break; 
   }
};
  
conn.onerror = function (err) { 
   console.log("Got error", err); 
};
  
//alias for sending JSON encoded messages 
function send(message) { 
   console.log(message)
   //attach the other peer username to our messages 
   if (connectedUser) { 
      message.name = connectedUser; 
   } 
	
   conn.send(JSON.stringify(message)); 
};
  
//****** 
//UI selectors block 
//******
 
var loginPage = document.querySelector('#loginPage'); 
var usernameInput = document.querySelector('#usernameInput'); 
var loginBtn = document.querySelector('#loginBtn'); 

var callPage = document.querySelector('#callPage'); 
var callToUsernameInput = document.querySelector('#callToUsernameInput');
var callBtn = document.querySelector('#callBtn'); 

var hangUpBtn = document.querySelector('#hangUpBtn');
  
var localVideo = document.querySelector('#localVideo'); 
var remoteVideo = document.querySelector('#remoteVideo'); 

var yourConn; 
var stream;
  

// Login when the user clicks the button 
// loginBtn.addEventListener("click", function (event) { 
//    name = usernameInput.value;
//    // console.log("LOGIN");

//    if (name.length > 0) { 
//       send({ 
//          type: "login", 
//          name: name 
//       }); 
//    }
	
// });
  
function handleLogin(success) { 

};
  
//initiating a call 
callBtn.addEventListener("click", function () { 
   var callToUsername = callToUsernameInput.value;
	
   if (callToUsername.length > 0) { 
	
      connectedUser = callToUsername;
		
      // create an offer 
      yourConn.createOffer(function (offer) { 
         send({ 
            type: "offer", 
            offer: offer 
         }); 
			
         yourConn.setLocalDescription(offer); 
      }, function (error) { 
         alert("Error when creating an offer"); 
      });
		
   } 
});
  
//when somebody sends us an offer 
function handleOffer(offer, name) { 
   connectedUser = name; 
   yourConn.setRemoteDescription(new RTCSessionDescription(offer));
	
   //create an answer to an offer 
   yourConn.createAnswer(function (answer) { 
      yourConn.setLocalDescription(answer); 
		
      send({ 
         type: "answer", 
         answer: answer 
      }); 
		
   }, function (error) { 
      alert("Error when creating an answer"); 
   }); 
};
  
//when we got an answer from a remote user
function handleAnswer(answer) { 
   yourConn.setRemoteDescription(new RTCSessionDescription(answer)); 
};
  
//when we got an ice candidate from a remote user 
function handleCandidate(candidate) { 
   yourConn.addIceCandidate(new RTCIceCandidate(candidate)); 
};
   
//hang up 
hangUpBtn.addEventListener("click", function () { 

   send({ 
      type: "leave" 
   });  
	
   handleLeave(); 
});
  
function handleLeave() { 
   connectedUser = null; 
   remoteVideo.src = null; 
	
   yourConn.close(); 
   yourConn.onicecandidate = null; 
   yourConn.onaddstream = null; 
};

