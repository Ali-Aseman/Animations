$(document).ready(function() {
    var div1 = $(".div1"),
        div2 = $(".div2"),
        div3 = $(".div3"),
        div4 = $(".div4"),
        div5 = $(".div5"),
        tl;

    tl = new TimelineLite();
    tl.to(div1, 1, { height: "100%" })
        .to(div2, 1, { height: "100%" }, "-=.7")
        .to(div3, 1, { height: "100%" }, "-=.7")
        .to(div4, 1, { height: "100%" }, "-=.7")
        .to(div5, 1, { height: "100%" }, "-=.7")
        .to(div1, 1, { bottom: "100%" }, "-=.3")
        .to(div2, 1, { bottom: "100%" }, "-=.7")
        .to(div3, 1, { bottom: "100%" }, "-=.7")
        .to(div4, 1, { bottom: "100%" }, "-=.7")
        .to(div5, 1, { bottom: "100%" }, "-=.7")
    tl.pause();
    $(".animate").click(function() {
        tl.restart();
    });




});