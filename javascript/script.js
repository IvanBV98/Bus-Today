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

// main

// secoondomer

class Time {
    constructor({ year, month, daynum, day, hour, minute, second }) {
        this.year = year
        this.month = month
        this.day = day
        this.hour = hour
        this.minute = minute
        this.second = second
        // if (this.month.toUpperCase() == 'JANUARY' || this.month.toUpperCase() == 'MARCH' || this.month.toUpperCase() == 'MAY' || this.month.toUpperCase() == 'JULE' || this.month.toUpperCase() == 'AUGUST' || this.month.toUpperCase() == 'OCTOBER' || this.month.toUpperCase() == 'DECEMBER') daynum = 31;
        // else if (this.month.toUpperCase() == 'APRIL' || this.month.toUpperCase() == 'JUNE' || this.month.toUpperCase() == 'SEPTEMBER' || this.month.toUpperCase() == 'NOVEMBER') daynum = 30;
        // else if (this.month.toUpperCase() == 'FEBRUARY') {
        //     if (this.year % 4 == 0) daynum = 29;
        //     else this.daynum = 28;
        // }
        this.year = year != '' ? this.year : 2000
        this.month = month != '' ? this.month : 1
        this.day = day != '' ? this.day : 1
        this.hour = hour != '' ? this.hour : 0
        this.minute = minute != '' ? this.minutes : 0
        this.second = second != '' ? this.second : 0
    }
}

let waiting_Date = new Time({
    year: 2020,
    month: 8,
    day: 1,
    hour: '',
    minute: '',
    second: ''
})

function clock() {
    let time = new Date(),
        years = time.getFullYear(),
        monthes = time.getMonth(),
        days = time.getDate(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds(),
        waiting_Date_1 = new Time({
            year: years,
            month: monthes,
            day: days,
            hour: hours,
            minute: minutes,
            second: seconds
        })
    console.log(waiting_Date_1);
    // setTimeout(clock(), 1000);
}
clock();