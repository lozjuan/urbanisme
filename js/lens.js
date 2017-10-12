$(document).ready(function() {
    $(".zoom").mlens({
        imgSrc: $(this).attr("data-big"),
        lensShape: "circle",
        lensSize: ["30%", "30%"],
        borderSize: 5,
        borderColor: "#000000",
        zoomLevel: 1,
        responsive: true
    });
});