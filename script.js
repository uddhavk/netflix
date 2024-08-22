
var tl=gsap.timeline();

tl.from(".left img",{
    y:30,
    opacity:0,
    duration:0.3,
})
tl.from(".right button",{
    y:30,
    opacity:0,
    duration:0.3,
    stagger:0.1
})
tl.from(".container h1,.container h3,.container p",{
    y:30,
    opacity:0,
    duration:0.3,
    stagger:0.1
})
tl.from(".input-div",{
    y:-30,
    opacity:0,
    duration:0.3,
    stagger:0.1
})