// Ingredient names + prices
const nocheBuenaItems = [
  { name: "EL REAL Spaghetti 400g", price: 40.75 },
  { name: "Purefoods Tenderjuicy Hotdog Cheese", price: 150.00 },
  { name: "Del Monte Spaghetti Sauce Filipino Style 500g", price: 71.00 },
  { name: "MAGNOLIA Fresh Chilled Whole Chicken", price: 276.00 },
  { name: "Gardenia White Bread Classic Regular 400g", price: 58.50 },
  { name: "CDO Classic Ham cooked 250g", price: 105.00 },
  { name: "Leche Flan", price: 91.00 },
  { name: "Beverages", price: 139.00 }
];

// Render menu items into the planner
const menuList = document.getElementById("menuList");
nocheBuenaItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
  menuList.appendChild(li);
});

// Calculate total and classify budget
function calculateTotal() {
  const budget = parseFloat(document.getElementById("budget").value);
  const total = nocheBuenaItems.reduce((sum, item) => sum + item.price, 0);

  // Update display
  document.getElementById("totalCost").textContent = total.toFixed(2);
  document.getElementById("budgetDisplay").textContent = budget.toFixed(2);

  // Classification logic
  let status = "";
  if (total > budget) {
    status = "❌ Not Affordable";
  } else if (total > 500) {
    status = "✅ Affordable";
  } else {
    status = "⚠️ Insufficient Supply";
  }

  document.getElementById("status").textContent = status;
}

// Initial run
calculateTotal();

// Recalculate when budget input changes
document.getElementById("budget").addEventListener("input", calculateTotal);
