//This adds student info dynamically
const studentInfo = document.getElementById("student-info");
studentInfo.textContent = "Student ID: 123456 | Name: John Doe";

//This is the pizza class
class Pizza {
  constructor(name, size, toppings, delivery) {
    this.name = name;
    this.size = size;
    this.toppings = toppings;
    this.delivery = delivery;
  }

  getDescription() {
    return `
      <h2>Your Pizza Order</h2>
      <p><strong>Name:</strong> ${this.name}</p>
      <p><strong>Size:</strong> ${this.size}</p>
      <p><strong>Toppings:</strong> ${this.toppings.join(", ") || "None"}</p>
      <p><strong>Delivery:</strong> ${this.delivery === "yes" ? "Yes" : "No"}</p>
    `;
  }
}

//This handle form submission
document.getElementById("pizza-form").addEventListener("submit", function (event) {
  event.preventDefault();

  //This capture form values
  const name = document.getElementById("name").value;
  const size = document.getElementById("size").value;
  const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(t => t.value);
  const delivery = document.querySelector('input[name="delivery"]:checked').value;

  //This create Pizza object
  const pizza = new Pizza(name, size, toppings, delivery);

  //This display order summary
  const orderSummary = document.getElementById("order-summary");
  orderSummary.innerHTML = pizza.getDescription();
});