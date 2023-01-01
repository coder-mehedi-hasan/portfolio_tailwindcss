let section_slider = document.getElementsByClassName('section_slider')
let sectionSliderDot = document.getElementsByClassName('secSliderDot')
let addNavbar = document.getElementById('addNavbar')
let removeNavbar = document.getElementById('removeNavbar')
let main_navTop = document.getElementById('main_nav')
let removeNavbarIcon = document.getElementById('removeNavbarIcon')


addNavbar.addEventListener('click',function(){
    main_navTop.style.top='0px'
})
removeNavbar.addEventListener('click',function(){
    main_navTop.style.top='-100%'
})
if(main_navTop.style.top == '-100%'){
    main_navTop.style.visibility='hidden'
}
removeNavbar.addEventListener('mouseenter',function(){
    if(removeNavbarIcon.style.transform === 'rotate(0deg)'){
        removeNavbarIcon.style.transform = 'rotate(450deg)'
        removeNavbarIcon.style.transition = '1s'
    }else{
        removeNavbarIcon.style.transform = 'rotate(0deg)'
    }
})
document.getElementById('secSlideDotsGroup').style.visibility = 'hidden'
function sectionSliderFunc(v){
    for(i=0;i<v;i++){
        section_slider[i].style.top = '-100%'
    }
    for(i=0;i<sectionSliderDot.length;i++){
        sectionSliderDot[i].className = sectionSliderDot[i].className.replace(" active","")
    }
    sectionSliderDot[v].className+= ' active';
    section_slider[v].style.top = '0px';
    if(v>=1){
        document.getElementById('secSlideDotsGroup').style.visibility = 'visible'
    }else{
        document.getElementById('secSlideDotsGroup').style.visibility = 'hidden'
    }
}

window.addEventListener('wheel',function(event){
    let v = 0
    if(event.deltaY<0){
        sectionSliderFunc(v)
    }else{
        sectionSliderFunc(v+=1)
    }
})

// timeline 
const timelineSliderButtons = document.querySelectorAll('.timeline_slider .controler ol li a')
const timelineSliderContents = document.querySelectorAll('.timeline_slider_content ol li')
const timelineControlerBtnPrev = document.querySelector('#timeline .prev .slideBtn')
const timelineControlerBtnNext = document.querySelector('#timeline .next .slideBtn')
const timelineControler = document.querySelector('.timeline_slider .controler')
let filler = document.querySelector('.controler .filler')

timelineControlerBtnPrev.addEventListener('click',function(){
    timelineControler.style.transform = 'translateX(0)' 
    timelineControlerBtnPrev.className += ' inactiveControler'
})
timelineControlerBtnNext.addEventListener('click',function(){
    timelineControler.style.transform = 'translateX(-50%)' 
    timelineControlerBtnNext.className += ' inactiveControler'
})


const timelineSliderButtonPressed = e => {
    const ButtonDate = e.target.getAttribute('data-date')
    for(timelineSliderContent of timelineSliderContents){
        const SliderContentDate = timelineSliderContent.getAttribute('data-date')
        timelineSliderContent.className = timelineSliderContent.className.replace("selected","")
        if(ButtonDate === SliderContentDate){
            timelineSliderContent.className += 'selected'
        }
    } 
}
for(button of timelineSliderButtons){
    button.addEventListener('click',timelineSliderButtonPressed)
}


// portfolio 
const porfolioNext = document.querySelector('.potfolio_slide_controler .next')
const porfolioPrev = document.querySelector('.potfolio_slide_controler .prev')
const portfolioSlide = document.querySelector('#portfolio .portfolio_slide')
let defaultValue = 0
porfolioNext.addEventListener('click',function(){
    defaultValue++
    if (defaultValue> 8 ){
        defaultValue = 8
    }
    portfolioSlide.style.transform = `translate3d(${defaultValue * -410}px , 0px ,0px)`
})
porfolioPrev.addEventListener('click',function(){
    defaultValue-=1
    if(defaultValue < 0){
        defaultValue=0
    }
    portfolioSlide.style.transform = `translate3d(${defaultValue * -410}px , 0px ,0px)`
})


// testimonial 

const testimonialSliders = document.querySelectorAll('.testimonial_item .testimonial_slider .slider_item')
const testimonialSliderControls= document.querySelectorAll('.testimonial_item .controler span')


const testimonialCotrolClick = e =>{
    const clickedData = e.target.getAttribute('data')
    for(testimonialSlider of testimonialSliders){
        const sliderData = testimonialSlider.getAttribute('data')
        testimonialSlider.className = testimonialSlider.className.replace(" active","")
        if(clickedData===sliderData){
            testimonialSlider.className += ' active'
        }
    }
}

for(button of testimonialSliderControls){
    button.addEventListener('click',testimonialCotrolClick)
}












// section_sliderFun(defaultValue)

// function clickElement(element){
//     section_sliderFun(defaultValue = element)
// }

// section_slider.style.z
// function section_sliderFun(element){
//     for(i = 0;i<section_slider.length;i++){
//         section_slider[i].style.top = '-100%';
//     }
//     for(i=0;i<sliderDot.length;i++){
//         sliderDot[i].className = sliderDot[i].className.replace("active","")
//     }
//     section_slider[element].style.top = '0'
//     section_slider[element].style.zIndex = element++
//     section_slider[element].style.transition = '0.5s ease-in'
//     sliderDot[element-1].className += " active"
// }