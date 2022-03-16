$(document).ready(function() {
    $(window).resize(function(){location.reload();});
    var dot2 = $(".container .dot2"),
        dot3 = $(".container .dot3"),
        dot4 = $(".container .dot4"),
        dot5 = $(".container .dot5"),
        dot6 = $(".container .dot6"),
        dot7 = $(".container .dot7"),
        dot8 = $(".container .dot8"),
        dot11 = $(".container2 .dot2"),
        dot12 = $(".container2 .dot3"),
        dot13 = $(".container2 .dot4"),
        dot14 = $(".container2 .dot5"),
        dot15 = $(".container2 .dot6"),
        dot16 = $(".container2 .dot7"),
        dot17 = $(".container2 .dot8"),
        lineItem1 = $(".item-line--1"),
        link1 = $(".link1"),
        lineItem2 = $(".item-line--2"),
        link2 = $(".link2"),
        verticalLine1 = $(".vertical-line-1"),
        verticalLine2 = $(".vertical-line-2"),
        verticalLineCont2 = $(".vertical-line-cont-2"),
        verticalLineCont3 = $(".vertical-line-cont-3"),
        horizontalLine1 = $(".horizontal-line-1"),
        horizontalLine2 = $(".horizontal-line-2"),
        title1 = $(".title1"),
        title2 = $(".title2"),
        tl1,
        tl2,
        tl3;
        // { onComplete: reverseClick}

    tl3 = new TimelineLite();
    var positionEl1 = $( ".item-line1" ).offset().top;
    var windowH = $( window ).height();
    console.log(windowH)
    $(".item--1").click(function() {
        tl3.to(link1, .1, { opacity: 0, scale: 0, ease: Power0.easeNone })
            .to(lineItem1, .2, {ease: Power0.easeNone, width: "100%" })
            .to(verticalLine1, .4, { height: (windowH*2) -  positionEl1 })
            .to(verticalLineCont2, .4, { height: "100vh", ease: Power1.easeIn })
            .to(horizontalLine1, .4, { width: "100%", ease: Power1.easeIn })
            .to(title1, .6, { opacity: 1, bottom:30,ease: Power1.easeIn },"-=0.2")
            .to(horizontalLine1, .1, { width: 0, ease: Power1.easeIn })
            .to(verticalLineCont2, .1, { height: 0, ease: Power1.easeIn })
            .to(verticalLine1, .1, { height: 0, ease: Power1.easeIn })
            .to(lineItem1, .1, {ease: Power0.easeNone,width: "0" })
            .to(link1, .1, { scale: 1, ease: Power0.easeNone })
            $('html, body').animate({
                scrollTop: $('.container2').offset().top
            }, 1000);
            
    });
    $(".item--2").click(function() {
        tl3.to(link2, .1, { opacity: 0, scale: 0, ease: Power0.easeNone })
            .to(lineItem2, .2, {ease: Power0.easeNone, width: "100%"})
            .to(verticalLine2, .4, { height: (windowH*3) -  positionEl1, ease: Power1.easeIn })
            .to(verticalLineCont2, .4, { height: "100vh", ease: Power1.easeIn },"-=0.12")
            .to(verticalLineCont3, .4, { height: "100vh", ease: Power1.easeIn },"-=0.12")
            .to(horizontalLine2, .4, { width: "100%", ease: Power1.easeIn })
            .to(title2, .6, { opacity: 1, bottom:30,ease: Power1.easeIn },"-=0.2")
            .to(horizontalLine2, .1, { width: 0, ease: Power1.easeIn })
            .to(verticalLineCont3, .1, { height: 0, ease: Power1.easeIn })
            .to(verticalLineCont2, .1, { height: 0, ease: Power1.easeIn })
            .to(verticalLine2, .1, { height: 0, ease: Power1.easeIn })
            .to(lineItem2, .1, {ease: Power0.easeNone, width: "0"})
            .to(link2, .1, { scale: 1, ease: Power0.easeNone })
            $('html, body').animate({
                scrollTop: $('.container3').offset().top
            }, 1200);
            
    });
    
    // function reverseClick() {
    //     tl3.reverse();
    // }
    tl1 = new TimelineLite({ onComplete: reverse1, onReverseComplete: restart1 });
    tl1.to(dot2, 0, { opacity: 1 })
        .to(dot2, 1, { top: "98.6%", ease: Power0.easeNone })
        .to(dot2, 0, { opacity: 0 })
        .to(dot3, 0, { opacity: 1 })
        .to(dot3, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot3, 0, { opacity: 0 })
        .to(dot4, 0, { opacity: 1 })
        .to(dot4, 1, { top: "98.6%", ease: Power0.easeNone })
        .to(dot4, 0, { opacity: 0 })
        .to(dot5, 0, { opacity: 1 })
        .to(dot5, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot5, 0, { opacity: 0 })
        .to(dot6, 0, { opacity: 1 })
        .to(dot6, 1, { top: "98.6%", ease: Power0.easeNone })
        .to(dot6, 0, { opacity: 0 })
        .to(dot7, 0, { opacity: 1 })
        .to(dot7, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot7, 0, { opacity: 0 })
        .to(dot8, 0, { opacity: 1 })
        .to(dot8, 1, { top: "98.6%", ease: Power0.easeNone })
        .to(dot8, 0, { opacity: 0 })
        // .to(dot9, 0, { opacity: 1 })
        // .to(dot9, 1, { left: "99.1%", ease: Power0.easeNone })
        // .to(dot9, 0, { opacity: 0 })

    // tl.pause();
    function reverse1() {
        tl1.reverse();
    }

    function restart1() {
        tl1.restart();
    }
    tl2 = new TimelineLite({ onComplete: reverse2, onReverseComplete: restart2 });
    tl2.to(dot17, 0, { opacity: 1 })
        .to(dot17, 1, { bottom: "98.6%", ease: Power0.easeNone })
        .to(dot17, 0, { opacity: 0 })
        .to(dot16, 0, { opacity: 1 })
        .to(dot16, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot16, 0, { opacity: 0 })
        .to(dot15, 0, { opacity: 1 })
        .to(dot15, 1, { bottom: "98.6%", ease: Power0.easeNone })
        .to(dot15, 0, { opacity: 0 })
        .to(dot14, 0, { opacity: 1 })
        .to(dot14, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot14, 0, { opacity: 0 })
        .to(dot13, 0, { opacity: 1 })
        .to(dot13, 1, { bottom: "98.6%", ease: Power0.easeNone })
        .to(dot13, 0, { opacity: 0 })
        .to(dot12, 0, { opacity: 1 })
        .to(dot12, 1, { left: "99.1%", ease: Power0.easeNone })
        .to(dot12, 0, { opacity: 0 })
        .to(dot11, 0, { opacity: 1 })
        .to(dot11, 1, { bottom: "98.6%", ease: Power0.easeNone })
        .to(dot11, 0, { opacity: 0 })
        // .to(dot10, 0, { opacity: 1 })
        // .to(dot10, 1, { left: "99.1%", ease: Power0.easeNone })
        // .to(dot10, 0, { opacity: 0 })

    // tl.pause();
    function reverse2() {
        tl2.reverse();
    }

    function restart2() {
        tl2.restart();
    }




});