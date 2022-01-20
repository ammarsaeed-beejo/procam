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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let firestore = firebase.firestore();

const db = firestore.collection("ordar");

const product = JSON.parse(localStorage.getItem("selecteditem"));
const submitBtn = document.querySelector("#submit");
let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let company = document.querySelector("#company");
let city = document.querySelector("#city");
let phone = document.querySelector("#phone");
let quentity = document.querySelector("#quentity");
let email = document.querySelector("#email");
let order_comments = document.querySelector("#order_comments");
document.getElementById("title").innerText = "Get a Quote for " + product.name;

submitBtn.addEventListener(
  "click",
  function () {
    let first_nameInput = first_name.value;
    let last_nameInput = last_name.value;
    let companyInput = company.value;
    let quentityInput = quentity.value;
    let cityInput = city.value;
    let camname = product.name;
    let phoneInput = phone.value;
    let emailInput = email.value;
    let order_commentsInput = order_comments.value;

    db.doc(companyInput)
      .set({
        name: first_nameInput,
        product: camname,
        quentity: quentityInput,
        last_name: last_nameInput,
        email: emailInput,
        company: companyInput,
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
