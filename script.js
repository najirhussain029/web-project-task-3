let balance = 0;
let income = 0;
let expense = 0;

function updateDisplay() {
  document.getElementById('balance').innerText = `৳${balance}`;
  document.getElementById('income').innerText = `৳${income}`;
  document.getElementById('expense').innerText = `৳${expense}`;
}

function addTransaction() {
  const desc = document.getElementById("description").value;
  const amount = Number(document.getElementById("amount").value);
  const type = document.querySelector("input[name='type']:checked");

  if (!desc || !amount || !type) {
    alert("Please fill in all fields and select transaction type.");
    return;
  }

  const li = document.createElement("li");
  li.classList.add(type.value);

  const spanDesc = document.createElement("span");
  spanDesc.textContent = desc;

  const spanAmount = document.createElement("span");
  spanAmount.textContent = `৳${amount}`;

  const delBtn = document.createElement("button");
  delBtn.textContent = "x";
  delBtn.onclick = function () {
    if (type.value === "income") {
      balance -= amount;
      income -= amount;
    } else {
      balance += amount;
      expense -= amount;
    }
    li.remove();
    updateDisplay();
  };

  li.appendChild(spanDesc);
  li.appendChild(spanAmount);
  li.appendChild(delBtn);

  document.getElementById("history").appendChild(li);

  if (type.value === "income") {
    balance += amount;
    income += amount;
  } else {
    balance -= amount;
    expense += amount;
  }

  updateDisplay();

  // Clear form
  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
  document.querySelectorAll("input[name='type']").forEach((e) => (e.checked = false));
}
