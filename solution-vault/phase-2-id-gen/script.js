const generateBtn = document.getElementById('generate-btn');
const userName = document.getElementById('user-name');
const userImage = document.getElementById('user-image');
const userId = document.getElementById('user-id');
const userLocation = document.getElementById('user-location');
const userEmail = document.getElementById('user-email');
const userRole = document.getElementById('user-role');

async function fetchUser() {
    try {
        generateBtn.disabled = true;
        generateBtn.innerText = 'Connecting to Mock API...';

        // Fetching from local JSON file to simulate an API response
        const response = await fetch('data.json');
        const users = await response.json();

        // Pick a random user from our local "database"
        const randomUser = users[Math.floor(Math.random() * users.length)];

        updateUI(randomUser);
    } catch (error) {
        console.error('Error fetching user:', error);
        alert('Failed to fetch user data. Make sure you are running a local server!');
    } finally {
        generateBtn.disabled = false;
        generateBtn.innerHTML = `
            <span>Generate New ID</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
        `;
    }
}

function updateUI(user) {
    userName.textContent = `${user.name.first} ${user.name.last}`;
    userImage.src = user.picture.large;
    userLocation.textContent = `${user.location.city}, ${user.location.country}`;
    userEmail.textContent = user.email;
    userRole.textContent = user.role;

    // Generate a unique ID number format
    userId.textContent = `#${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
}

// Event Listener
generateBtn.addEventListener('click', fetchUser);

// Load one initial user on page load
fetchUser();
