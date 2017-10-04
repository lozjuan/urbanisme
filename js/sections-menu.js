function openList() {
    switch (window.location.href.split('/').slice(-2)[0]) {
        case 'urbanisme':
            document.getElementById('urbanisme').setAttribute("class", "collapse show");
            break;
        case 'socio-culturel':
            document.getElementById('socio').setAttribute("class", "collapse show");
            break;
        case 'logement':
            document.getElementById('logement').setAttribute("class", "collapse show");
            break;
        case 'maison':
            document.getElementById('maison').setAttribute("class", "collapse show");
            break;
        case 'sante':
            document.getElementById('sante').setAttribute("class", "collapse show");
            break;
        case 'tertiaire':
            document.getElementById('tertiaire').setAttribute("class", "collapse show");
            break;
    }
}


jQuery(document).ready(function($) {
    var path = window.location.pathname.split("/").pop();;
    var target = $('nav a[href="' + path + '"]');
    target.addClass('active')
});