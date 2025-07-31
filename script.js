const form = document.getElementById('markoForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log("Form Submitted:", data);
  successMsg.textContent = "✅ Form successfully submitted!";
  form.reset();
});

fetch("https://script.google.com/macros/s/AKfycbxdASNfKYp2iJDdGNeZN0sR8oBK9qvwCGFuvEtadjozgHteZ-b5iiZoxgtb7F3fNNXoWQ/execR", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
    }
})
.then(res => res.text())
.then(response => {
    console.log("Response:", response);
    successMsg.textContent = "✅ Form successfully submitted!";
})
.catch(error => {
    console.error("Error!", error.message);
});

window.location.href = "thankyou.html";
fetch("https://script.google.com/macros/s/YOUR_LINK/exec", {

})
