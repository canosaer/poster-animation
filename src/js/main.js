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

        let r2Timeline = gsap.timeline()

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

        
        
    }


}

new PosterAnimation()