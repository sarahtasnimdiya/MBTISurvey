// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyDBhyazickJXjYa3REwoQf9PRjf8X1N2KE",
  authDomain: "mbti-research.firebaseapp.com",
  projectId: "mbti-research",
  storageBucket: "mbti-research.firebasestorage.app",
  messagingSenderId: "1081581346791",
  appId: "1:1081581346791:web:742486d45a817c274ee742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Utility function to extract MBTI type from the result link
function extractMBTIFromURL(url) {
  const regex = /profiles\/([a-z]{4}-[at])\//i;
  const match = url.match(regex);
  return match ? match[1].toUpperCase() : null;
}

// Form submission handler
document.getElementById("mbtiForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value.trim(),
    age: parseInt(document.getElementById("age").value),
    gender: document.getElementById("gender").value,
    education: parseInt(document.getElementById("education").value),
    interest: document.getElementById("interest").value.trim(),
    mbtiLink: document.getElementById("mbtiLink").value.trim(),
    writing: document.getElementById("writingSample").value.trim(),
    timestamp: new Date()
  };

  formData.mbtiType = extractMBTIFromURL(formData.mbtiLink);

  if (!formData.mbtiType) {
    alert("Invalid MBTI result link. Please check the format.");
    return;
  }

    try {
    await addDoc(collection(db, "mbti_responses"), formData);
    console.log("✅ Submitted successfully. Redirecting...");
    window.location.href = "thankyou.html";
    } catch (err) {
    console.error("Firestore error:", err);
    alert("Failed to save your response.");
    }

});
