document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("change-password-form");
  const successMsg = document.getElementById("success-message");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const oldPassword = document.getElementById("old-pass").value;
    const newPassword = document.getElementById("new-pass").value;
    const confirmPassword = document.getElementById("confirm-pass").value;

    // check if passwords match
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          oldPassword: oldPassword,
          newPassword: newPassword
        })
      });

      const data = await res.json();
      console.log("Server:", data);

      // show success message
      if (successMsg) {
        successMsg.classList.add("show");
        setTimeout(() => {
          successMsg.classList.remove("show");
        }, 1500);
      }

      // redirect after success
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1200);

    } catch (error) {
      console.error("Error:", error);
      alert("Server request failed. Please try again.");
    }

  });

});