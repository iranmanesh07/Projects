function menushow(){
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("c-1").style.display = "none";
    document.getElementById("c-2").style.display = "block";
}
function menuhidden(){
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("c-1").style.display = "block";
    document.getElementById("c-2").style.display = "none";
}
function search(){
    document.getElementById("search").style.display = "block";
    document.getElementById("menua").style.display = "none";
    document.getElementById("menub").style.display = "block";
    document.getElementById("nonep").style.display = "none";
}
function nosearch(){
    document.getElementById("search").style.display = "none";
    document.getElementById("menub").style.display = "none";
    document.getElementById("menua").style.display = "block";
    document.getElementById("nonep").style.display = "block";
}