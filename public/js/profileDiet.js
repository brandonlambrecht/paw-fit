const dietBtn = document.querySelector('.new-diet-btn');
const newDiet = document.querySelector('.new-diet');
const dietForm = document.querySelector('.diet-form');

dietBtn.addEventListener('click', addDietBtn)


function addDietBtn() {
    newDiet.style.display = 'none'
    dietForm.style.display = 'block'
}