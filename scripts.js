// Sample data
let availability = [];
let bookings = [];

function setAvailability() {
    const date = document.getElementById('availability-date').value;
    const time = document.getElementById('availability-time').value;
    if (date && time) {
        availability.push({ date, time });
        displayAvailability();
    }
}

function displayAvailability() {
    const list = document.getElementById('availability-list');
    list.innerHTML = '';
    availability.forEach(slot => {
        const listItem = document.createElement('li');
        listItem.textContent = `${slot.date} at ${slot.time}`;
        list.appendChild(listItem);
    });
}

function bookSlot() {
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    if (date && time) {
        const slotIndex = availability.findIndex(slot => slot.date === date && slot.time === time);
        if (slotIndex !== -1) {
            bookings.push({ date, time });
            availability.splice(slotIndex, 1); // Remove booked slot from availability
            document.getElementById('confirmation').textContent = 'Booking confirmed!';
            displayAvailability();
            displayBookings();
        } else {
            document.getElementById('confirmation').textContent = 'Slot not available!';
        }
    }
}

function displayBookings() {
    const list = document.getElementById('booking-list');
    list.innerHTML = '';
    bookings.forEach(booking => {
        const listItem = document.createElement('li');
        listItem.textContent = `${booking.date} at ${booking.time}`;
        list.appendChild(listItem);
    });
}

// Initial call to display data
displayAvailability();
displayBookings();
