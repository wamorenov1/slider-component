// Variables
let sliderContainer = document.querySelector(".custom-slider") // Contenedor Slider
let btnRightSlider = document.querySelector("#btn-slider-right") // Boton derecho Slider
let btnLeftSlider = document.querySelector("#btn-slider-left") // Boton Izquierdo Slider
let listSlider = document.querySelector(".list-slider")

// Contador elementos lista 
let countListElements = listSlider.getElementsByTagName("li").length


// Funciones
const buttonScrollRight = () => {
    sliderContainer.scrollLeft += sliderContainer.offsetWidth
    sliderContainer.focus()
}

const buttonScrollLeft = () => {
    sliderContainer.scrollLeft -= sliderContainer.offsetWidth
    sliderContainer.focus()
}

// Escuchador de eventos
btnRightSlider.addEventListener("click", buttonScrollRight)
btnLeftSlider.addEventListener("click", buttonScrollLeft)