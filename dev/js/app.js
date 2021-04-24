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

// When the user clicks on <span> (x), close the modal
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
// Cargar las emisoras mediante AJAX
function rock() {
var xmlhttp = new XMLHttpRequest();
var url = "https://nl1.api.radio-browser.info/json/stations/byname/rock";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}
function jazz() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://nl1.api.radio-browser.info/json/stations/byname/jazz";
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }
    function classical() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://nl1.api.radio-browser.info/json/stations/byname/classical";
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }
    function disco() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://nl1.api.radio-browser.info/json/stations/byname/disco";
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }
    function cinema() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://nl1.api.radio-browser.info/json/stations/byname/soundtrack";
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }
    function news() {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://nl1.api.radio-browser.info/json/stations/byname/news";
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                myFunction(myArr);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        }
        function ethnic() {
            var xmlhttp = new XMLHttpRequest();
            var url = "https://nl1.api.radio-browser.info/json/stations/byname/ethnic";
            
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var myArr = JSON.parse(this.responseText);
                    myFunction(myArr);
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            }
            function folk() {
                var xmlhttp = new XMLHttpRequest();
                var url = "https://nl1.api.radio-browser.info/json/stations/byname/folk";
                
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var myArr = JSON.parse(this.responseText);
                        myFunction(myArr);
                    }
                };
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
                }
function myFunction(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
     //   if (arr[i].codec != "MP3") {
     //       arr.splice(i, 1);
     //   }
        out += '<a href="#" data-value="' + arr[i].url + '"><img id="emisora" src="' + arr[i].favicon + '">' + arr[i].name + '</a>';


    }
    document.getElementById("list").innerHTML = out;
}
// Cuando el usuario clicka en una radio, se abre el modal 
	var lst = document.getElementById("result");
	lst.onclick = function() {
		modal.style.display = "block";
		document.getElementById("info").innerHTML = audioSource.src
	}
	
