class Slider {
    constructor({ diaraction, moveTime, active, slider, auto }) {
        this.slider = document.querySelector(slider)
        this.sliderLine = this.slider.querySelector('.slider__line')
        this.next = this.slider.querySelector('.slider__next')
        this.prev = this.slider.querySelector('.slider__prev')
        this.slides = [...this.sliderLine.children]

        this.dir = diaraction.toUpperCase() == 'Y' ? 'Y' : 'X'
        this.timeMove = moveTime != undefined && moveTime >= 300 ? moveTime : 300
        this.active = active

        this.width = this.slider.clientWidth
        this.height = this.slider.clientHeight
        this.moveSize = this.dir == 'Y' ? this.height : this.width

        this.sliderLine.style = `
            position:relative;
            height:${this.height}px;
            overflow:hidden;
        `
        this.slides.forEach(el => {
            el.style = `
                position:absolute;
                width:${this.width}px;
                height:${this.height}px;
            `
            if (el != this.slides[this.active]) {
                el.style.transform = `translate${this.dir}(${this.moveSize}px)`
            }
            if (el == this.slides[this.slides.length - 1]) {
                el.style.transform = `translate${this.dir}(${this.moveSize * -1}px)`
            }
        })

        this.next.addEventListener('click', () => this.move(this.next))
        this.prev.addEventListener('click', () => this.move(this.prev))
    }
    move(btn) {
        let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize

        this.slides.forEach(el => {
            el.style.transition = '0ms'
            if (el !== this.slides[this.active]) {
                el.style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`
            }
        })

        this.slides[this.active].style.transition = `${this.timeMove}ms`
        this.slides[this.active].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`
        if (btn == this.next) {
            this.active++
            if (this.active >= this.slides.length) {
                this.active = 0
            }
        } else if (btn == this.prev) {
            this.active--
            if (this.active < 0) {
                this.active = this.slides.length - 1
            }
        }
        this.slides[this.active].style.transition = `${this.timeMove}ms`
        this.slides[this.active].style.transform = `translate${this.dir}(${0}px)`
    }
}



const headerSlider = new Slider({
    diaraction: '',
    moveTime: '500',
    active: 0,
    slider: '.myfirstslider',
    auto: false,
    // opacity:true
}),
    newsSlider = new Slider({
        diaraction: '',
        moveTime: '500',
        active: 0,
        slider: '.mysecondslider',
        auto: false,
        // opacity:true
    })

console.log(expmleSlider)

// main

// secoondomer
class Time {
    constructor({ month, daynum, day, hour, minutes, second }) {
        this.month = document.querySelector(month)
        this.daynum = document.querySelector(daynum)
        this.day = document.querySelector(day)
        this.hour = document.querySelector(hour)
        this.minutes = document.querySelector(minutes)
        this.second = document.querySelector(second)
        if (this.month.toUpperCase == 'JANUARY' || this.month.toUpperCase == 'MARCH' || this.month.toUpperCase == 'MAY' || this.month.toUpperCase == 'JULE' || this.month.toUpperCase == 'AUGUST' || this.month.toUpperCase == 'OCTOBER' || this.month.toUpperCase == 'DECEMBER') this.daynum = 31
    }
}
// time = new Date()