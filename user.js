import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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

window.searchLicense = function () {
  const license = document.getElementById("searchInput").value.trim();
  const dbRef = ref(db);
  get(child(dbRef, "licenses/" + license)).then((snapshot) => {
    if (snapshot.exists()) {
      const d = snapshot.val();
      document.getElementById("result").innerHTML = `
        <p>লাইসেন্স নাম্বার: ${license}</p>
        <p>মালিকের নাম: ${d.ownerName}</p>
        <p>পিতার নাম: ${d.fatherName}</p>
        <p>জন্ম তারিখ: ${d.dob}</p>
        <p>লাইসেন্স ধরন: ${d.licenseType}</p>
        <p>ইস্যু তারিখ: ${d.issueDate}</p>
        <p>মেয়াদ শেষ: ${d.expiryDate}</p>
      `;
    } else {
      document.getElementById("result").innerHTML = "<p style='color:red'>কোনো তথ্য পাওয়া যায়নি।</p>";
    }
  });
};
