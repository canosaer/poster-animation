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
        let letters = document.querySelectorAll('.letter')

        // let r2Timeline = gsap.timeline({repeat: -1, repeatDelay: 5})
        // let falconTimeline = gsap.timeline({repeat: -1, repeatDelay: 11})
        let r2Timeline = gsap.timeline()
        let falconTimeline = gsap.timeline()

        r2Timeline.to(
            r2, {
                left: '50%',
                top: '33.7%',
                duration: 7.5,
                ease: 'sine.in',
            }
        )
        r2Timeline.to(
            r2, {
                left: '21.5%',
                top: '33.5%',
                duration: 7.5,
                ease: 'sine.out',
                transform: 'rotate(6deg)'
            }
        )
        falconTimeline.to(
            falcon, {
                duration: 7.5,
                left: '80%',
                top: '14%',
                ease: 'sine.in',
            }
        )
        gsap.to(
            yellowSun, {
                duration: 14,
                top: '28%',
                ease: 'sine.inOut',
                // repeat: -1,
                repeatDelay: 5,
            }
        )
        gsap.to(
            redSun, {
                duration: 7.5,
                top: '32%',
                ease: 'sine.inOut',
                // repeat: -1,
                repeatDelay: 16,
            }
        )
        gsap.to(
            [sky, city, cityTouchup, yellowSun, redSun, falcon, groundTouchup1, groundTouchup2, groundTouchup3], {
                duration: 14,
                filter: 'brightness(0.5)',
                ease: 'sine.in',
                // repeat: -1,
                repeatDelay: 5,
            }
        )
        gsap.to(
            [sky, r2, ground, city, cityTouchup, yellowSun, redSun, falcon, groundTouchup1, groundTouchup2, groundTouchup3], {
                delay: 10.5,
                duration: 5,
                filter: 'brightness(0)',
                ease: 'sine',
                // repeat: -1,
                repeatDelay: 22,
            }
        )
        for(let i=0;i<letters.length;i++){
            if(i===0){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '19%'
                    }
                )
            }
            if(i===1){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '23%'
                    }
                )
            }
            if(i===2){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '27%'
                    }
                )
            }
            if(i===3){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '32.4%'
                    }
                )
            }
            if(i===4){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '36.9%'
                    }
                )
            }
            if(i===5){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '42%'
                    }
                )
            }
            if(i===6){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '46.4%'
                    }
                )
            }
            if(i===7){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                    }
                )
            }
            if(i===8){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '53.4%'
                    }
                )
            }
            if(i===9){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '57%'
                    }
                )
            }
            if(i===10){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '61%'
                    }
                )
            }
            if(i===11){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '66.75%'
                    }
                )
            }
            if(i===12){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '70.7%'
                    }
                )
            }
            if(i===13){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '75.1%'
                    }
                )
            }
            if(i===14){
                gsap.to(
                    letters[i], {
                        duration: 5,
                        opacity: 1,
                        ease: 'sine.inOut',
                        left: '79.8%'
                    }
                )
            }
        }


        
    }


}

new PosterAnimation()