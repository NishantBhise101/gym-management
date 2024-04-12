document.addEventListener('DOMContentLoaded', function() {
    const totalMembersElement = document.getElementById('total-members');
    const totalTraineesElement = document.getElementById('total-trainees');
  
    // Connect to WebSocket server
    const socket = new WebSocket('ws://your-websocket-server-url');
  
    // Listen for messages
    socket.addEventListener('message', function(event) {
      const data = JSON.parse(event.data);
      // Update total members and total trainees
      totalMembersElement.textContent = data.totalMembers;
      totalTraineesElement.textContent = data.totalTrainees;
    });
  });
  