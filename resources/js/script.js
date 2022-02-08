//mixiutup
var mixer = mixitup('.grid-portfolio-container');

//scroolify
$(function () {
    $.scrollify({
        section: ".example-classname",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
    });
});

//menu
function openMenu() {
    document.getElementById('navbar').style.display='block';
}

function closeMenu() {
    document.getElementById('navbar').style.display='none';
}


$(function(){
    $('.menu-items a,scroll-down a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },1000);
        return false;
    });
})


























