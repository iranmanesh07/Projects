function clock() {
              var date = new Date();
                 document.getElementById("hour").innerHTML = date.getHours();
                      document.getElementById("minute").innerHTML = date.getMinutes();
                      document.getElementById("second").innerHTML = date.getSeconds();
                                        }
                     setInterval(clock, 1000);

function Day(){
   document.body.style.backgroundColor = "#333";
   document.body.style.color = "#fff";
   document.getElementById("Dd").style.display = "none";
   document.getElementById("Nn").style.display = "block";
   document.getElementById("item1").style.color = "white";
   document.getElementById("item2").style.color = "white";
   document.getElementById("item3").style.color = "white";
   document.getElementById("item4").style.color = "white";
}
function night(){
     document.body.style.backgroundColor = "#fff";
     document.body.style.color = "#234780";
     document.getElementById("Nn").style.display = "none";
     document.getElementById("Dd").style.display = "block";
     document.getElementById("item1").style.color = "#333";
     document.getElementById("item2").style.color = "#333";
     document.getElementById("item3").style.color = "#333";
     document.getElementById("item4").style.color = "#333";
}