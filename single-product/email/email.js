
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";




const firebaseConfig = {
    apiKey: "AIzaSyCwDLNDUINuCDZckS5C1M-I-9ia7ZoKIsw",
    authDomain: "pro-cam-web.firebaseapp.com",
    databaseURL: "https://pro-cam-web-default-rtdb.firebaseio.com",
    projectId: "pro-cam-web",
    storageBucket: "pro-cam-web.appspot.com",
    messagingSenderId: "1043601014942",
    appId: "1:1043601014942:web:c4608e15cdafb23fb3bb8f",
    measurementId: "G-L8XZNC95BJ"
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let firestore = firebase.firestore();

const db = firestore.collection("emailSubscribe");

const submitBtn = document.querySelector("#submit");

let email = document.querySelector("#emailSubscribe");





submitBtn.addEventListener("click", function () {

    let emailInput = email.value;




    db.doc(emailInput)
        .set({

            
            email: emailInput,
            





        })
        .then(function () {
            document.getElementById("submit").innerHTML = "Done!";
            document.getElementById("submit").style.backgroundColor = 'red';
            alert("done");
        })
        .catch(function (error) {
            console.log(error);
        });
}, { once: true });
