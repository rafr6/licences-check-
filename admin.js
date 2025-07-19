import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFEpmvsyOm3fmFQQd88CrKbAH944DpJbE",
  authDomain: "brt-licence.firebaseapp.com",
  databaseURL: "https://brt-licence-default-rtdb.firebaseio.com",
  projectId: "brt-licence",
  storageBucket: "brt-licence.appspot.com",
  messagingSenderId: "502685118571",
  appId: "1:502685118571:web:9f727f6c090ceac59c412e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const USERNAME = "admin";
const PASSWORD = "1234";

window.login = function () {
  const u = document.getElementById("adminUser").value;
  const p = document.getElementById("adminPass").value;
  if (u === USERNAME && p === PASSWORD) {
    document.getElementById("formArea").style.display = "block";
  } else {
    alert("ভুল ইউজারনেম অথবা পাসওয়ার্ড!");
  }
};

window.addLicense = function () {
  const license = document.getElementById("licenseNumber").value;
  const data = {
    ownerName: document.getElementById("ownerName").value,
    fatherName: document.getElementById("fatherName").value,
    dob: document.getElementById("dob").value,
    licenseType: document.getElementById("licenseType").value,
    issueDate: document.getElementById("issueDate").value,
    expiryDate: document.getElementById("expiryDate").value
  };
  set(ref(db, "licenses/" + license), data).then(() => {
    document.getElementById("msg").innerText = "তথ্য যুক্ত হয়েছে!";
  });
};
