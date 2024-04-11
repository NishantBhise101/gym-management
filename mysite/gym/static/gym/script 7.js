// Function to create a new card
function createNewCard() {
    const container = document.querySelector('.container');
    const newCard = document.createElement('div');
    newCard.className = 'container';
    newCard.innerHTML = `
        <div class="inner">
            <input type="file" class="image" accept="image/*">
            <img class="equipment-image" src="placeholder.jpg" alt="Equipment Image">
        </div>
        <div class="button">
            <span class="span1"></span>
            <span class="span1"></span>
        </div>
        <label for="equipment-name">Equipment Name:</label>
        <input type="text" class="equipment-name" placeholder="Enter Equipment Name">
        <textarea class="maintenance-report" placeholder="Maintenance Report"></textarea>
        <div class="last"><button class="read-more-button">Read More!</button></div>
    `;
    container.parentNode.insertBefore(newCard, container.nextSibling);
    // Attach event listener to the "Read More" button of the new card
    attachReadMoreEvent(newCard.querySelector('.read-more-button'));

    // Initialize image preview functionality for the new container
    initializeImagePreview(newCard.querySelector('.image'));
}

// Function to initialize image preview functionality
function initializeImagePreview(imageInput) {
    imageInput.addEventListener('change', function(event) {
        const reader = new FileReader();
        const img = imageInput.nextElementSibling;
        reader.onload = function() {
            img.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    });
}

// Function to attach "Read More" event listener to a button
function attachReadMoreEvent(button) {
    button.addEventListener('click', function() {
        // Get equipment name and maintenance report from the clicked card
        const equipmentName = button.parentNode.previousElementSibling.previousElementSibling.value;
        const maintenanceReport = button.parentNode.previousElementSibling.value;

        // Open a new page with the equipment details in a table
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
            <style>
                /* General styles */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f4f4f4;
                }
                
                h2 {
                    color: #333;
                    font-size: 1.5em;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }

                th, td {
                    border: 1px solid #dddddd;
                    padding: 8px;
                    text-align: left;
                }

                th {
                    background-color: #f2f2f2;
                }

                button {
                    background-color: #110f7ec7;
                    color: #ffffff;
                    font-size: medium;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                    border-radius: 4px;
                    margin-right: 10px;
                    transition: background-color 0.3s;
                }

                button:hover {
                    background-color: #251e8d;
                }
            </style>
            <h2>${equipmentName}</h2>
            <table>
                <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Equipment Name</td>
                    <td>${equipmentName}</td>
                </tr>
                <tr>
                    <td>Purchase Date</td>
                    <td><input type="text" id="purchaseDate" value="YYYY-MM-DD"></td>
                </tr>
                <tr>
                    <td>Last Serviced</td>
                    <td><input type="text" id="lastServiced" value="YYYY-MM-DD"></td>
                </tr>
                <tr>
                    <td>Purpose</td>
                    <td><textarea id="purpose" rows="4" placeholder="Purpose"></textarea></td>
                </tr>
            </table>
            <button onclick="updateDetails()">Update Information</button>
            <button onclick="clearDetails()">Clear Information</button>
        `);
    });
}

// Attach initial "Read More" event to the button of the first card
attachReadMoreEvent(document.querySelector('.read-more-button'));

// Attach event listener to the "Add New Equipment" button
document.querySelector('.add-card-button').addEventListener('click', function() {
    createNewCard();
});

// Initialize image preview functionality for existing containers
const images = document.querySelectorAll('.image');
images.forEach(function(image) {
    initializeImagePreview(image);
});

// Function to update equipment details
function updateDetails() {
    // Your update logic here
    // For demonstration, alert is shown
    alert('Update information functionality will be added here.');
}

// Function to clear equipment details
function clearDetails() {
    // Prompt a confirmation dialog
    if (confirm("Are you sure you want to clear the information?")) {
        // Clear the input fields and text area
        const purchaseDateInput = document.getElementById('purchaseDate');
        const lastServicedInput = document.getElementById('lastServiced');
        const purposeTextarea = document.getElementById('purpose');

        purchaseDateInput.value = "YYYY-MM-DD";
        lastServicedInput.value = "YYYY-MM-DD";
        purposeTextarea.value = "";
    }
}
