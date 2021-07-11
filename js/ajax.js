// Cargar las emisoras mediante AJAX
function playlist(estil) {

        var xmlhttp = new XMLHttpRequest();
        var url = "https://nl1.api.radio-browser.info/json/stations/byname/" + estil;
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                ajaxFunction(myArr);
            } 
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    
        
    function ajaxFunction(arr) {
        
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            if (arr[i].favicon == "") {
                arr.pop()
                
           } else {
            out += '<li class="radio"><a href="#" data-value="' + arr[i].url + '"><img id="emisora" src="' + arr[i].favicon + '" + onerror="this.onerror=null; this.remove();" alt="2" width="100" height="120">' + arr[i].name + '</a></li>';
           }
           
            
    
        }
        document.getElementById("list").innerHTML = out;
        
    }
}

playlist("jazz");




