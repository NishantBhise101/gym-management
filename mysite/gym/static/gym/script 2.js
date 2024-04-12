// Simulate data fetching (replace with actual data retrieval)
const memberCount = 120;
const activeMemberships = 65;
const upcomingClasses = [
  "Zumba - Today at 7 PM",
  "Strength Training - Tomorrow at 10 AM"
];

document.getElementById("member-count").textContent = memberCount;
document.getElementById("active-memberships").textContent = activeMemberships;

const upcomingClassList = document.getElementById("upcoming-classes");
upcomingClasses.innerHTML = ""; // Clear existing list

upcomingClasses.forEach(className => {
  const listItem = document.createElement("li");
  listItem.textContent = className;
  upcomingClassList.appendChild(listItem);
});

// Placeholder for revenue chart (replace with chart.js or similar library)
const revenueChart = document.getElementById("revenue-chart").getContext('2d');

// Replace with actual chart data and configuration
const labels = ['Jan', 'Feb', 'Mar'];
const data = [1000, 1200, 1500];

new Chart(revenueChart, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Monthly Revenue',
      data: data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 
