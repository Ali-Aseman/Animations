$(document).ready(function() {
    var line = $(".line"),
        container1 = $(".container-1"),
        container2 = $(".container-2"),
        container = $(".container"),
        tl;



    tl = new TimelineLite();

    tl.to(line, 1, { width: "100%" })
        .to(line, 1, { rotation: "90" })
        .to(container1, 1, { right: "100%" }, "containers")
        .to(container2, 1, { left: "100%" }, "containers")





});