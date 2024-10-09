// Name: Raja Tsegaye Sori
// Class: CPSC 332
// Assignment: Homework 5
// Last Modified: October 9, 2024

// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];
// Add your JavaScript code here.

const artGallery = document.getElementById('art-grid');
const counter = document.getElementById('counter');
const resetButton = document.getElementById('reset-button');
const addArt = document.getElementById('add-art-button');
let counterVar = 0; // counter varibale
let artPanels = document.querySelectorAll('.art-panel');

let removeMode = false;
const removeArtButton = document.getElementById('remove-art-button');

// Add click event to each panel
function panelClick(panel) {
    panel.addEventListener('click', function() {
        artPanels = document.querySelectorAll('.art-panel'); // Update the list of panels

        // Check if we're in removal mode
        if (removeMode) {
            this.remove(); // Remove the panel if in remove mode
        }
        // Otherwise, handle "viewed" behavior
        else if (!this.classList.contains('viewed')) {
            this.classList.add('viewed');
            counterVar++;
            counter.textContent = `Artworks Viewed: ${counterVar}`;
        }
    });
}

artPanels.forEach(panelClick);

// reset button
resetButton.addEventListener('click', () => {
    // Reset counter
    counterVar = 0;
    counter.textContent = `Artworks Viewed: ${counterVar}`;
    
    // Reset all art panels to their original state
    const allPanels = document.querySelectorAll('.art-panel'); // reinitilazing since the first one only saves the first 3
    allPanels.forEach(panel => {
        panel.classList.remove('viewed');
    });
});

// add art button
let artIndex = 0;
addArt.addEventListener('click', () => {
    if (artIndex < newArtworks.length) {
        // Create a new art panel
        const randomArt = newArtworks[Math.floor(Math.random() * newArtworks.length)]; // getting a random index from newArtworks
        const newPanel = document.createElement('div');
        newPanel.classList.add('art-panel');
        newPanel.innerHTML = `
            <img src="${randomArt.img}" alt="${randomArt.title}">
            <p>${randomArt.title} by ${randomArt.artist}</p>
        `;

        // Append new panel to the grid
        document.querySelector('.art-grid').appendChild(newPanel);

        // Add click event to the new panel 
        panelClick(newPanel);

        // Increment to the next artwork
        artIndex++;
    }
});

// remove mode
removeArtButton.addEventListener('click', () => {
    const removeArtButton = document.getElementById('remove-art-button');
    removeMode = !removeMode;
    if (removeMode) {
        removeArtButton.textContent = 'Click to Remove Artworks';
        removeArtButton.style.backgroundColor = '#ff5555'; // Indicate active remove mode
    } else {
        removeArtButton.textContent = '(Bonus) Remove Artwork';
        removeArtButton.style.backgroundColor = '#333';
    }
});


