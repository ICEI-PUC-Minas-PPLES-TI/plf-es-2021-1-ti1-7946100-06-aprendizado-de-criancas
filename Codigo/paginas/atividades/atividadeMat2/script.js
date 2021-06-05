document.getElementById('iconList').addEventListener('click', handleNavbar);

function handleNavbar() {
    document.getElementById("topnav").classList.toggle('responsive');
    document.getElementById("title").classList.toggle('responsive-title');
}

