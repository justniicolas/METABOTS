let tl = gsap.timeline();

tl.to('.loading', {
    left: '200%',
    duration: 0.75
})
tl.from('header', {
    duration: 0.5,
    filter: "blur(5px)"

})
tl.from('.hero', {
    duration: 0.5,
    filter: "blur(5px)"
})

tl.from('.logo', {
    opacity: 0,
    duration: 0.2
})

tl.from('.socials', {
    opacity: 0,
    duration: 0.2
})

tl.to('.loading', {
    display: 'none'
})
tl.from('.cards', {
    duration: 0.5,
    filter: "blur(px)"
})

tl.from('.menu-btn', {
    opacity: 0.5,
    duration: 1

})
