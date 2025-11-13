// Update API base URL
const API_URL = "http://localhost:3000";

// Display Fees Modal

async function showFees(id) {
  try {
    const res = await fetch(`${API_URL}/api/fees/${id}`);
    const data = await res.json();

    // Assuming your server returns something like { name, fees: { min, max } }
    
    document.getElementById("feeDetails").innerText =
      `Fee Range: ₹${data.fees.min} - ₹${data.fees.max}`;
    document.getElementById("feeModal").classList.add("active");
  } catch (error) {
    alert("Unable to load fee details");
  }
}

// Close Modal
function closeModal() {
  document.getElementById("feeModal").classList.remove("active");
}

// Handle Form Submissions
const forms = [
  { id: "leadForm1", msg: "msg1" },
  { id: "leadForm2", msg: "msg2" },
];

forms.forEach(({ id, msg }) => {
  const form = document.getElementById(id);
  const messageBox = document.getElementById(msg);

  if (!form) {
    console.warn(`Form with id "${id}" not found`);
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect all input values properly
    const formData = Object.fromEntries(new FormData(form).entries());
    console.log("Submitting lead:", formData);

    try {
      const res = await fetch(`${API_URL}/api/send-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        messageBox.innerText = "Submitted successfully!";
        form.reset(); // clear form after success
      } else {
        messageBox.innerText = `Submission failed: ${data.message || "Unknown error"}`;
      }
    } catch (err) {
      console.error("Network or server error:", err);
      messageBox.innerText = "Network error. Please try again.";
    }
  });
});

