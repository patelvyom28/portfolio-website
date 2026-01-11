let cartCount = 0;

function addToCart() {
  cartCount++;
  document.querySelectorAll("#cart-count").forEach(el => el.innerText = cartCount);
  alert("Item added to cart!");
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();
  if (!name || !email || !msg) {
    alert("Please fill all fields!");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

function loginUser() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "1234") {
    alert("Login Successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid Credentials!");
  }
  return false;
}
