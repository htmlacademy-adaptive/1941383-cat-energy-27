const slider = document.querySelector('.slider');
const range = slider.querySelector('.slider__range');
const leftImage = slider.querySelector('.slider__half-wrapper--left');
const rightImage = slider.querySelector('.slider__half-wrapper--right');

leftImage.style.width = `${range.value}%`;
rightImage.style.width = `${100 - range.value}%`;

range.addEventListener('input', () => {
  leftImage.style.width = `${range.value}%`;
  rightImage.style.width = `${100 - range.value}%`;
});
