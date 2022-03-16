$(document).ready(function() {
    var lineTop = $(".line-top"),
        lineRight = $(".line-right"),
        lineBottom = $(".line-bottom"),
        lineLeft = $(".line-left"),
        containerBlack = $(".container-black"),
        containerWhite = $(".container-white"),
        title1 = $(".title-1"),
        title2 = $(".title-2"),
        tl;



    tl = new TimelineLite();

    tl.to(lineTop, 0.6, { width: "100%" })
        .to(lineRight, 0.6, { height: "100%" })
        .to(lineBottom, 0.6, { width: "100%" })
        .to(lineLeft, 0.6, { height: "100%" })
        .to(containerBlack, 0, { backgroundColor: "#000" })
        .to(containerWhite, 0.6, { left: "100%" })
        .fromTo(title1, 1, { opacity: 0, marginLeft: -200 }, { opacity: 1, marginLeft: 0 })
        .fromTo(title2, 1, { opacity: 0, marginRight: -200 }, { opacity: 1, marginRight: 0 }, "-=0.5")

});