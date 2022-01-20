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
  measurementId: "G-L8XZNC95BJ",
};
// Initialize Firebase
// Initialize Firebase error here
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firestore = firebase.firestore();

const db = firestore.collection("orders");

const checkoutItem = JSON.parse(localStorage.getItem("cartItems"));
const submitBtn = document.querySelector("#submit");
const first_name = document.querySelector("#first_name");
const last_name = document.querySelector("#last_name");
const addresses_1 = document.querySelector("#addresses_1");
const city = document.querySelector("#city");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const order_comments = document.querySelector("#order_comments");

submitBtn.addEventListener(
  "click",
  function () {
    const first_nameInput = first_name.value;
    const last_nameInput = last_name.value;
    const addresses_1Input = addresses_1.value;
    const cityInput = city.value;
    const phoneInput = phone.value;
    const emailInput = email.value;
    const order_commentsInput = order_comments.value;

    db.doc(first_nameInput)
      .set({
        name: first_nameInput,
        last_name: last_nameInput,
        order: checkoutItem.name,
        email: emailInput,
        addresses_1: addresses_1Input,
        city: cityInput,
        phone: phoneInput,
        order_comments: order_commentsInput,
      })
      .then(function () {
        document.getElementById("submit").innerHTML = "Done!";
        document.getElementById("submit").style.backgroundColor = "red";
        alert("done");
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  { once: true }
);
