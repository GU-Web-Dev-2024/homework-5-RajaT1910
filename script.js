
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

const art_gallery = document.getElementById('art-grid');
const counter = document.getElementById('counter');
const reset_button = document.getElementById('reset-button');
const add_art = document.getElementById('add-art-button');
let counter_var = 0; // counter varibale
const art_panels = document.querySelectorAll('.art-panel');

// Add click event to each panel
art_panels.forEach(panel => {
    panel.addEventListener('click', function() {
        // Only update if the panel hasn't been clicked before
        if (!this.classList.contains('viewed')) {
            this.classList.add('viewed');
            counter_var++;
            // this.classList.style.backgroundColor = "purple";
            counter.textContent = `Artworks Viewed: ${counter_var}`;
        }
    });
});

// reset button
reset_button.addEventListener('click', () => {
    // Reset counter
    counter_var = 0;
    counter.textContent = `Artworks Viewed: ${counter_var}`;
    
    // Reset all art panels to their original state
    const all_panels = document.querySelectorAll('.art-panel'); // reinitilazing since the first one only saves the first 3
    all_panels.forEach(panel => {
        panel.classList.remove('viewed');
    });
});

// add art button
let art_index = 0;
add_art.addEventListener('click', () => {
    if (art_index < newArtworks.length) {
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
        newPanel.addEventListener('click', function() {
            if (!this.classList.contains('viewed')) {
                this.classList.add('viewed');
                counter_var++;
                counter.textContent = `Artworks Viewed: ${counter_var}`;
            }
        });  

        // Increment to the next artwork
        art_index++;
    }
});

