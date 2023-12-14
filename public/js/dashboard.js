const petBtn = document.querySelector(".new-pet-btn");
const newPet = document.querySelector(".new-pet");
const petForm = document.querySelector(".pet-form");
const removePet = document.querySelectorAll(".remove-animal-btn");
const updatePetArr = document.querySelectorAll('.update-animals-btn');

const newPetModalBtn = document.querySelector('#new-pet-modal');


const petNameEl = document.querySelector('#pname')
const animalTypeEl = document.querySelector('#type')
const petAgeEl = document.querySelector('#age')
const petGenderEl = document.querySelector('#gender')
const petColorEl = document.querySelector('#color')
const petWeightEl = document.querySelector('#weight')
const petBreedEl = document.querySelector('#breed')


let animalIdForUpdate = '';

petBtn.addEventListener('click', addPetBtn)

function addPetBtn() {
    
    newPet.style.display = "none"
    petForm.style.display = "block"

}

function openUpdateForm(event) {
    const animalData = JSON.parse(event.target.getAttribute('data-animal'));

    const { pet_name, animal_type, pet_age, pet_gender, pet_color, pet_weight, pet_breed, id } = animalData;
    
    animalIdForUpdate = id;
    
    petNameEl.value = pet_name;
    animalTypeEl.value = animal_type;
    petAgeEl.value = pet_age;
    petGenderEl.value = pet_gender;
    petColorEl.value = pet_color;
    petWeightEl.value = pet_weight;
    petBreedEl.value = pet_breed;

    addPetBtn();
};

const HandlePetForm = async (event) => {
    event.preventDefault();

    const pet_name = document.querySelector('#pname').value.trim();
    const animal_type = document.querySelector('#type').value.trim();
    const pet_age = document.querySelector('#age').value.trim();
    const pet_gender = document.querySelector('#gender').value.trim();
    const pet_color = document.querySelector('#color').value.trim();
    const pet_weight = parseFloat(document.querySelector('#weight').value.trim());
    const pet_breed = document.querySelector('#breed').value.trim();

    if (!pet_name || !animal_type || !pet_age || !pet_gender || !pet_color || !pet_weight || !pet_breed) {
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

        let response;
        
        if(animalIdForUpdate) {
            // fetch
            response = await fetch(`/api/animals/${animalIdForUpdate}`, {
                method: 'PUT',
                body: JSON.stringify(bodyObj),
                headers: { 'Content-Type': 'application/json' },
            });

        } else {
            response = await fetch('/api/animals', {
                method: 'POST',
                body: JSON.stringify(bodyObj),
                headers: { 'Content-Type': 'application/json' },
            });
        }


        if (!response.ok) {
            const res = await response.json();
            console.log(res);
            const errorMsg = res.message;
            return;
        }

        animalIdForUpdate = '';
        document.location.replace('/dashboard');
    } catch (err) {
        console.log(err);
    }
};

const deletePetForm = async (event) => {
    event.preventDefault();

    const animal_id = event.target.getAttribute('data-id');

    try {
    const response = await fetch(`/api/animals/${animal_id}`, {
        method: 'delete',
        headers: { 'content-type': 'application/json' },
    });

    if (!response.ok) {
        const res = await response.json();
        console.log(res);
        const errorMsg = res.message;
        return;
    }

    document.location.reload();
    }catch (err) {
        console.log(err);

    }
}

removePet.forEach((button) => {
    button.addEventListener("click", deletePetForm);
});

updatePetArr.forEach((button) => {
    button.addEventListener("click", openUpdateForm);
});

// removePet.addEventListener('click', deletePetForm);
petForm.addEventListener('submit', HandlePetForm);

newPetModalBtn.addEventListener('click', HandlePetForm)