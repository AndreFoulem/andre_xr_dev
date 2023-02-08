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
    end: '+=3000',
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

  // stagger
  gsap.from(text, {
    y: 130,
    opacity: 0,
    delay: 0.5,
    duration: 2,
    ease: 'easein',
    stagger: 0.1,
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

//- > Observer saved entry
const sectionOne = document.querySelector('#hero')

const options = {
  root: null,
  threshold: 0,
  rootMargin: '0px',
}
let nullifyFirstEntry = false

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (nullifyFirstEntry === true) {
      entry.target.classList.toggle('red')
      console.log('entry')
    } else {
      nullifyFirstEntry = true
    }
  })
}, options)

observer.observe(sectionOne)
