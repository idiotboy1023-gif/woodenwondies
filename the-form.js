// Save data to localStorage
function saveData() {
    try {
        const name = document.getElementById("nameInput").value.trim();
        const age = document.getElementById("ageInput").value.trim();
        const gmail = document.getElementById("gmailInput").value.trim();

        // Basic validation
        if (!name || !age || !gmail) {
            alert("Please fill in all fields.");
            return;
        }

        // Save as an object
        const userData = { name, age, gmail };
        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Data saved successfully!");
    } catch (error) {
        console.error("Error saving data:", error);
        alert("An error occurred while saving.");
    }
}

// Load data from localStorage
function loadData() {
    try {
        const storedData = localStorage.getItem("userData");
        if (!storedData) {
            alert("No data found.");
            return;
        }

        const { name, age, gmail } = JSON.parse(storedData);
        document.getElementById("output").textContent =
            `Name: ${name}, Age: ${age}, Gmail: ${gmail}`;
    } catch (error) {
        console.error("Error loading data:", error);
        alert("An error occurred while loading.");
    }
}