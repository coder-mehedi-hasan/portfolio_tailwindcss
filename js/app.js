let section_slider = document.getElementsByClassName('section_slider')
let sectionSliderDot = document.getElementsByClassName('secSliderDot')
let addNavbar = document.getElementById('addNavbar')
let removeNavbar = document.getElementById('removeNavbar')
let main_navTop = document.getElementById('main_nav')
let removeNavbarIcon = document.getElementById('removeNavbarIcon')

let ol = document.querySelectorAll('ol li a')
console.log(ol)

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
// document.getElementById('secSlideDotsGroup').style.visibility = 'hidden'
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