// Reservation Form Validation
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let guests = document.getElementById("guests").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || guests === "") {
        formMessage.style.color = "red";
        formMessage.innerText = "All fields are required!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMessage.style.color = "red";
        formMessage.innerText = "Enter a valid email!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.innerText = "Table Reserved Successfully! 🎉";
});

// DOM Manipulation - Order List
function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Enter a food item!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = value;

    // Remove order when clicked
    li.onclick = function() {
        this.remove();
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
