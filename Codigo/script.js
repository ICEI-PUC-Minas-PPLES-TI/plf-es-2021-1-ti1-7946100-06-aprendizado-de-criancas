document.getElementById("sidebarCollapse").addEventListener("click", function(event){
    event.preventDefault();
    if(!document.getElementById("sidebar").classList.contains("active")){
        document.getElementById("sidebar").classList.add("active")
    } else document.getElementById("sidebar").classList.remove("active")

    if(!document.getElementById("sidebarCollapse").classList.contains("active")){
        document.getElementById("sidebarCollapse").classList.add("active")
    } else document.getElementById("sidebarCollapse").classList.remove("active")
});





