function makeItWorse() {
    const gifContainer = document.getElementById("annoying-gif");
    
    // Add random GIFs
    const gifs = [
        'https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif',
        'https://media.giphy.com/media/f6pOe5e8ShRhS/giphy.gif',
        'https://media.giphy.com/media/l3vR7X6As8gblhZ68/giphy.gif'
    ];

    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    
    const newGif = document.createElement("img");
    newGif.src = randomGif;
    newGif.width = 200;
    gifContainer.appendChild(newGif);
}

