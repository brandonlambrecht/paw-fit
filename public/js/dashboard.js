const petBtn = document.querySelector(".new-pet-btn")
const newPet = document.querySelector(".new-pet")
const petForm = document.querySelector(".pet-form")


petBtn.addEventListener('click', addPetBtn)

function addPetBtn() {
    
    newPet.style.display = "none"
    petForm.style.display = "block"

}

const HandlePetForm = async (event) => {
    event.preventDefault();
    // removeAllErrors();

    const pet_name = document.querySelector('#pname').value.trim();
    const animal_type = document.querySelector('#type').value.trim();
    const pet_age = document.querySelector('#age').value.trim();
    const pet_gender = document.querySelector('#gender').value.trim();
    const pet_color = document.querySelector('#color').value.trim();
    const pet_weight = parseFloat(document.querySelector('#weight').value.trim());
    const pet_breed = document.querySelector('#breed').value.trim();

    if (!pet_name || !animal_type || !pet_age || !pet_gender || !pet_color || !pet_weight || !pet_breed) {
    showError(loginFormEl, "Please provide a name,type,gender,color,weight, and breed.")
    return;
    }

    const bodyObj = {
    pet_name,
    animal_type,
    pet_age,
    pet_gender,
    pet_color,
    pet_weight,
    pet_breed
    }

    try {
    const response = await fetch('/api/animals', {
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
        const res = await response.json();
        console.log(res);
        const errorMsg = res.message;
        showError(petForm, errorMsg);
        return;
    }

    document.location.replace('/dashboard');
    } catch (err) {
    console.log(err);
    showError(petForm, "A login error has ocurred.")
    }
};

petForm.addEventListener('submit', HandlePetForm);