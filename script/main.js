// -> ---------- BEGIN ANIMATE ON SCROLL --------- -< //

const container = document.querySelector('.container')
const sections = gsap.utils.toArray('.container section')
const texts = gsap.utils.toArray('.anim')
const mask = document.querySelector('.mask')

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.container',
    pin: true,
    scrub: 1,
    end: '+=3500',
    // snap: 1 / (sections.length - 1),
    // markers: false,
  },
})

// -> animate sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll('.anim')

  // bump out if there's no items to animate
  if (text.length === 0) return

  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 4,
    ease: 'elastic',
    stagger: 0.5,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      // start: 'left center',
      start: 'left bottom',
      // markers: true,
    },
  })
})
//-- END ANIMATE ON SCROLL -- -<
