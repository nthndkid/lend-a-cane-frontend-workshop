/**
 * PHASE 2: Dynamic ID Generator
 *
 * Follow the steps below to build your code!
 */

// 1. SELECT DOM ELEMENTS (Buttons, Name, Image, etc.)
// Hint: Use document.getElementById()
const generateBtn = document.getElementById('generate-btn');
const userImage = document.getElementById('user-image');
const userName = document.getElementById('user-name');
const userId = document.getElementById('user-id');
const userLocation = document.getElementById('user-location');
const userEmail = document.getElementById('user-email');
const userRole = document.getElementById('user-role');

// 2. CREATE THE FETCH FUNCTION (async function fetchUser)
// - Fetch the data from 'data.json'
// - Pick a random user
// - Call your update function
async function fetchUser() {
    try {
        generateBtn.disabled = true;
        generateBtn.innerText = 'Connecting to API';

        //fetch data from data.json
        const response = await fetch('data.json');
        const users = await response.json();

        // if we have 10 users. 0-9 si math.random 0-9 = randomUser
        const randomUser = users[Math.floor(Math.random() * users.length)];

        console.log(randomUser)
        updateUI(randomUser)

        console.log(users)
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch user data!')
    } finally {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<span class="text-green-400"> Generate new ID </span>';
    }
}

// 3. CREATE THE UPDATE FUNCTION (function updateUI)
// - Update the textContent and src of your elements
function updateUI(user){
    userImage.src = user.picture.large;
    userName.textContent = `${user.name.first} ${user.name.last}`
    userLocation.textContent = `${user.location.city}, ${user.location.country}`;
    userEmail.textContent = user.email;
    userRole.textContent = user.role;

    userId.textContent = `#${Math.random().toString(36).substr(2, 8).toUpperCase()}`
}

// 4. ADD AN EVENT LISTENER
// - Listen for a 'click' on your button
generateBtn.addEventListener('click', fetchUser)

// 5. (Optional) LOAD AN INITIAL USER ON PAGE LOAD
fetchUser();