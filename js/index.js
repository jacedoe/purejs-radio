// Establece la variable modal
var modal = document.getElementById("myModal");

// Establece el indentificador del botón 'Player'
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario clicka en el botón Player, se abre el modal  
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario clicka en el <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Activación del audio y del visualizador
list.onclick = function(e) {
    e.preventDefault();

    var elm = e.target;
    var audio = document.getElementById('audio');

    var source = document.getElementById('audioSource');
    source.src = elm.getAttribute('data-value');

    audio.load(); // call this to just preload the audio without playing
    audio.play(); // call this to play the song right away

    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            var r = barHeight + (25 * (i / bufferLength));
            var g = 250 * (i / bufferLength);
            var b = 50;

            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

            x += barWidth + 1;
        }
    }

    audio.play();
    renderFrame();
};
// Cuando el usuario clicka en una radio, se abre el modal 
var lst = document.getElementById("lista");
lst.onclick = function() {       
    modal.style.display = "block";
    document.getElementById("info").innerHTML = audioSource.src;
}
// Mostrar la imagen de la emisora


// Botones de control de audio del modal

function playAudio() { 
audio.play(); 
} 

function pauseAudio() { 
audio.pause(); 
}

// Control del volumen

function volumen() {
 audio.volume = document.getElementById("volume").value;
}
