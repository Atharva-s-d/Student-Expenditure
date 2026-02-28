let total = 0;
let max = 0;
let maxrow = null;
let budget = 0;

document.querySelector("#expense button").addEventListener("click" , function() {
    let budgetInput = parseFloat(document.getElementById("budget").value);
    if (isNaN(budgetInput) || budgetInput <= 0) {
        alert("Invalid Budget.");
        return;
    }
    budget = budgetInput;
    alert("Budget set successfully.")
});

function Process() {
    if (budget === 0) {
        alert("Please set budget.");
        return;
    }

    let name = document.getElementById("object").value;
    let price = parseFloat(document.getElementById("price").value);

    if (name === "" || isNaN(price) || price <= 0) {
        alert("Please enter valid details.");
        return;
    }

    let table = document.querySelector("table");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = price;

    total += price;

    document.querySelector("#total p").innerHTML = "Total = Rs." + total;

    if (price > max) {
        if (maxrow !== null) {
            maxrow.classList.remove("highest");
        }
        max = price;
        row.classList.add("highest");
        maxrow = row;

        document.querySelector("#max p").innerHTML = "Maximum = Rs." + max;
    }

    let warningDiv = document.getElementById("warning");

    if (!warningDiv) {
        warningDiv = document.createElement("div");
        warningDiv.id = "warning";
        document.getElementById("box").appendChild(warningDiv);
    }

    if (total > budget) {
        warningDiv.className = "warning";
        warningDiv.innerHTML = "Warning budget exceeded.";
    }
    else {
        warningDiv.innerHTML = "";
    }

    document.getElementById("object").value = "";
    document.getElementById("price").value = "";
}