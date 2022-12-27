let section_slider = document.getElementsByClassName('section_slider')
let sliderDot = document.getElementsByClassName('sliderDot')
let defaultValue = 0;
section_sliderFun(defaultValue)

function clickElement(element){
    section_sliderFun(defaultValue = element)
}

section_slider.style.z
function section_sliderFun(element){
    for(i = 0;i<section_slider.length;i++){
        section_slider[i].style.top = '-100%';
    }
    for(i=0;i<sliderDot.length;i++){
        sliderDot[i].className = sliderDot[i].className.replace("active","")
    }
    section_slider[element].style.top = '0'
    section_slider[element].style.zIndex = element++
    section_slider[element].style.transition = '0.5s ease-in'
    sliderDot[element-1].className += " active"
}