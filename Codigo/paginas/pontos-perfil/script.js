$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $("#avatar4").click(function(){
        var codigo = $("#avatar4").clone();
        $("#perfilFoto").empty();
        $("#perfilFoto").append(codigo); 
        });
    //let ponto = parseInt($(".pontos").text()); 
    //$(".pontos").text(); //recuperar do local storage e colocar dentro de text() quando conseguirem pegar os pontos
   /*  $("#perfilSelec").attr("src", (localStorage.getItem("avatar")));
    $(".avatarUnlocked").click(function(){
        if(($(this).attr("src")!=$("#perfilSelec").attr("src"))==true){
            if ((confirm("Quer usar essa foto de perfil?"))==true){
                $("#perfilSelec").attr("src", ($(this).attr("src")));
                localStorage.setItem("avatar",($(this).attr("src")));
            }
        }
    }); */
    

 });