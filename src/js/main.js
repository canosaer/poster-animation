class PosterAnimation {
    constructor() {

        this.animate()
    }

    animate = () => {
        let sky = document.querySelector('.sky')
        let city = document.querySelector('.city')
        let cityTouchup = document.querySelector('.city__touch-up')
        let yellowSun = document.querySelector('.yellow-sun')
        let redSun = document.querySelector('.red-sun')
        let falcon = document.querySelector('.falcon')
        let ground = document.querySelector('.ground')
        let groundTouchup1 = document.querySelector('.ground__touch-up')
        let groundTouchup2 = document.querySelector('.ground__touch-up2')
        let groundTouchup3 = document.querySelector('.ground__touch-up3')
        let r2 = document.querySelector('.r2')

        // let r2Timeline = gsap.timeline({repeat: -1, repeatDelay: 5})
        // let falconTimeline = gsap.timeline({repeat: -1, repeatDelay: 11})
        let r2Timeline = gsap.timeline()
        let falconTimeline = gsap.timeline()

        r2Timeline.to(
            r2, {
                left: '50%',
                top: '33.7%',
                duration: 11,
                ease: 'sine.in',
            }
        )
        r2Timeline.to(
            r2, {
                left: '21.5%',
                top: '33.5%',
                duration: 11,
                ease: 'sine.out',
                transform: 'rotate(6deg)'
            }
        )
        falconTimeline.to(
            falcon, {
                duration: 15,
                left: '64%',
                top: '14%',
                ease: 'sine.in',
            }
        )
        falconTimeline.to(
            falcon, {
                duration: 1,
                opacity: 0,
            }, '-=1'
        )
        gsap.to(
            yellowSun, {
                duration: 22,
                top: '28%',
                ease: 'sine.inOut',
                // repeat: -1,
                repeatDelay: 5,
            }
        )
        gsap.to(
            redSun, {
                duration: 11,
                top: '32%',
                ease: 'sine.inOut',
                // repeat: -1,
                repeatDelay: 16,
            }
        )
        gsap.to(
            [sky, city, cityTouchup, yellowSun, redSun, falcon, groundTouchup1, groundTouchup2, groundTouchup3], {
                duration: 22,
                filter: 'brightness(0.5)',
                ease: 'sine.in',
                // repeat: -1,
                repeatDelay: 5,
            }
        )
        gsap.to(
            [sky, r2, ground, city, cityTouchup, yellowSun, redSun, falcon, groundTouchup1, groundTouchup2, groundTouchup3], {
                delay: 18,
                duration: 5,
                filter: 'brightness(0)',
                ease: 'sine',
                // repeat: -1,
                repeatDelay: 22,
            }
        )


        
    }


}

new PosterAnimation()