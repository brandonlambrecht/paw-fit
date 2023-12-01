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
    removeAllErrors();

    const petName = document.querySelector('#pname').value.trim();
    const type = document.querySelector('#type').value.trim();
    const gender = document.querySelector('#gender').value.trim();
    const color = document.querySelector('#color').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const breed = document.querySelector('#breed').value.trim();

    if (!petName || !type || !gender || !color || !weight || !breed) {
    showError(loginFormEl, "Please provide both an email and password.")
    return;
    }

    const bodyObj = {
    petName,
    type,
    gender,
    color,
    weight,
    breed
    }

//     try {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify(bodyObj),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (!response.ok) {
//         const res = await response.json();
//         console.log(res);
//         const errorMsg = res.message;
//         showError(loginFormEl, errorMsg);
//         return;
//       }
  
//       document.location.replace('/dashboard');
//     } catch (err) {
//       console.log(err);
//       showError(loginFormEl, "A login error has ocurred.")
//     }
//   };