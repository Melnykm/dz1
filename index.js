const debounceresizeImage = _.debounce((event) => {
    const sliderValue = event.target.value;
    const image = document.querySelector('.slider__image');
    image.style.width = `${sliderValue}%`;
}, 100);

function handleSliderInput(event) {
    debounceResizeImage(event);
}

const sliderInput = document.querySelector('.slider__input');
sliderInput.addEventListener('input', handleSliderInput);

const moveBox = _.debounce((event) => {
    const box = document.getElementById('box');
    box.style.left = `${event.clientX - 25}px`;
    box.style.top = `${event.clientY - 25}px`;
}, 100);

function handleMouseMove(event) {
    moveBox(event);
}

document.addEventListener('mousemove', handleMouseMove);