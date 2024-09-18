function createDeskMap(desks) {
    const map = document.getElementById('deskMap');

    desks.forEach(desk => {
        const deskDiv = document.createElement('div');
        deskDiv.classList.add('desk');
        deskDiv.setAttribute('data-id', desk.id);

        // Position the desk on the map
        deskDiv.style.left = desk.position.x + 'px';
        deskDiv.style.top = desk.position.y + 'px';

        // Check if the desk is booked and add relevant classes and name
        if (desk.booked) {
            deskDiv.classList.add('booked');
            deskDiv.setAttribute('data-name', desk.user_name || 'Booked');  // Set the user's name
            deskDiv.innerText = desk.user_name || 'Booked';  // Display the name inside the desk
        } else {
            deskDiv.setAttribute('data-name', 'Available');
        }

        // Append the desk element to the map
        map.appendChild(deskDiv);
    });
}

