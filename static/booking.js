let selectedDeskId = null;  // To track the desk being booked/unbooked

createDeskMap(desks);

document.querySelectorAll('.desk').forEach(desk => {
    desk.addEventListener('click', function() {
        const deskId = this.getAttribute('data-id');

        if (this.classList.contains('booked')) {
            // Confirm before unbooking the desk
            const confirmed = confirm('Are you sure you want to unbook this desk?');
            if (confirmed) {
                toggleDesk(deskId, 'unbook');
            }
        } else {
            // Open modal to book the desk
            selectedDeskId = deskId;
            const modal = document.getElementById('nameModal');
            modal.style.display = 'flex';  // Ensure the modal is centered
            document.getElementById('userNameInput').focus();  // Focus on the input field
        }
    });
});

// Handle modal close button
const closeModal = document.querySelector('.close');
closeModal.onclick = function() {
    const modal = document.getElementById('nameModal');
    modal.style.display = 'none';  // Hide the modal
}

// Function to handle desk booking
function bookDesk() {
    const userName = document.getElementById('userNameInput').value;
    if (userName) {
        toggleDesk(selectedDeskId, 'book', userName);
    } else {
        alert('Please enter a name to book the desk.');
    }
}

// Confirm booking button logic
document.getElementById('confirmBooking').onclick = bookDesk;

// Add event listener for Enter key on the input field
document.getElementById('userNameInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        bookDesk();
    }
});

// Function to toggle desk status
function toggleDesk(deskId, action, userName = null) {
    const body = { desk_id: deskId, action: action };
    if (userName) {
        body.user_name = userName;
    }

    fetch('/toggle_desk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(data => {
        const modal = document.getElementById('nameModal');
        modal.style.display = 'none';  // Hide the modal after booking
        window.location.reload();  // Reload to update desk statuses
    });
}