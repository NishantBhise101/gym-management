const registrationForm = document.getElementById("member-registration-form");
const registrationMessage = document.getElementById("registration-message");
const membersTable = document.getElementById("members-table");

// **Server-side integration required**
// 1. Implement logic to register new members and store data.
// 2. Implement logic to fetch a list of registered members with details.

// Example (assuming server returns an array of member objects):
const members = [
  // { membershipId: "...", name: "...", contact: "...", email: "...", gender: "...", joiningDate: "...", expiryDate: "..." },
  // ... more member objects
];

function populateMembersTable() {
  const tableBody = membersTable.getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing rows

  for (const member of members) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${member.membershipId}</td>
      <td>${member.name}</td>
      <td>${member.contact}</td>
      <td>${member.email}</td>
      <td>${member.gender}</td>
      <td>${member.joiningDate}</td>
      <td>${member.expiryDate}</td> <td>
        <button class="action-btn view-history">View History</button>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn delete">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  }
}

// Handle form submission (assuming successful registration)
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // **Server-side integration required**
  // Submit registration data and handle response (update message or table)
  registrationMessage.textContent = "Registration successful!";
  registrationForm.reset(); // Clear form after successful registration
  // Fetch and display updated member list
  fetchMembers(); // Call your function to fetch and populate members table
});

// **Server-side integration required**
// Implement function to fetch member data and populate the table
function fetchMembers() {
  // Fetch member data from server
  // Update `members` array with retrieved data
  populateMembersTable();
}

// **Optional:** Add event listeners for action buttons (view history, edit, delete)
// These would require further server-side integration for specific functionalities.

fetchMembers(); // Call to fetch and populate members table on page load
