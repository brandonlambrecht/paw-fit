const petBtn = document.querySelector(".new-pet-btn")
const newPet = document.querySelector(".new-pet")
const petForm = document.querySelector(".pet-form")

petBtn.addEventListener('click', addPetBtn)

function addPetBtn() {
    console.log("tacos")
    newPet.style.display = "none"
    petForm.style.display = "block"

}