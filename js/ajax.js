// Cargar las emisoras mediante AJAX
function playlist(estil) {

        var xmlhttp = new XMLHttpRequest();
        var url = "https://nl1.api.radio-browser.info/json/stations/byname/" + estil;
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                myFunction(myArr);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    
        
    function myFunction(arr) {
        
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            if (arr[i].codec != "MP3") {
                arr.pop()
                
           } else {
            out += '<li><a href="#" data-value="' + arr[i].url + '"><img id="emisora" src="' + arr[i].favicon + '">' + arr[i].name + '</a></li>';
           }
           
            
    
        }
        document.getElementById("list").innerHTML = out;
        
    }
}

playlist("jazz");




