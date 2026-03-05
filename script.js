document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form") || document.querySelector("form");
  const successMsg = document.getElementById("success-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value; // don't store/display this

    try {
      // ✅ Works on Railway + locally (when served by your express server)
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      console.log("Server:", data);

      // show success
      if (successMsg) {
        successMsg.classList.add("show");
        setTimeout(() => successMsg.classList.remove("show"), 1500);
      }

      // store ONLY email for demo
      localStorage.setItem("demo_email", email);

      // go to dashboard
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 900);

    } catch (err) {
      console.error("Error:", err);
      alert("Request failed. Check if your Railway deployment is running.");
    }
  });
});