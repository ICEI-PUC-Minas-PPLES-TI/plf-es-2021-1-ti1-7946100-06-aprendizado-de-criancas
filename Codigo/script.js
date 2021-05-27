
document.getElementById('iconList').addEventListener('click', handleNavbar);

function handleNavbar() {
    document.getElementById("topnav").classList.toggle('responsive');
    document.getElementById("title").classList.toggle('responsive-title');
}

/* carrega todas as paginas nas divs */
$(document).ready(function () {

    $("#conteudoDash").load("./paginas/dashboard/index.html");
    $("#conteudoPort").load("./paginas/login/index.html");
    $("#conteudoPort").hide();
    $("#conteudoMat1").load("./paginas/atividades/atividadeMat1");
    $("#conteudoMat1").hide();
    $("#conteudoMat2").load("./paginas/atividades/atividadeMat2");
    $("#conteudoMat2").hide();
    $("#conteudoPerfil").load("./paginas/pontos/index.html");
    $("#conteudoPerfil").hide();
    $("#conteudoAtvRecom").load("./paginas/atividadesMatematica/index.html");
    $("#conteudoAtvRecom").hide();

    const pages = ["#conteudoDash", "#conteudoMat1", "#conteudoMat2", "#conteudoPerfil", "#conteudoPort", "#conteudoAtvRecom"];

    $("#atv-port-btn").click(function () {
        $("#conteudoPort").show();
        for (var i = 0; i < pages.length; i++) {
            if (pages[i] != "#conteudoPort") {
                $(pages[i]).hide();
            }
        }
    });

    $("#atv-mat1-btn").click(function () {
        $("#conteudoMat1").show();
        for (var i = 0; i < pages.length; i++) {
            if (pages[i] != "#conteudoMat1") {
                $(pages[i]).hide();
            }
        }
    });

    $("#atv-mat2-btn").click(function () {
        $("#conteudoMat2").show();
        for (var i = 0; i < pages.length; i++) {
            if (pages[i] != "#conteudoMat2") {
                $(pages[i]).hide();
            }
        }
    });

    $("#atv-recom-btn").click(function () {
        $("#conteudoAtvRecom").show();
        for (var i = 0; i < pages.length; i++) {
            if (pages[i] != "#conteudoAtvRecom") {
                $(pages[i]).hide();
            }
        }
    });

    $("#perfil-btn").click(function () {
        $("#conteudoPerfil").show();
        for (var i = 0; i < pages.length; i++) {
            if (pages[i] != "#conteudoPerfil") {
                $(pages[i]).hide();
            }
        }
    });
});





