const dietBtns = document.querySelectorAll('.new-diet-btn');
const newDiet = document.querySelector('.new-diet');
const dietForm = document.querySelector('.diet-form');

let currentDietId = '';

dietBtns.forEach((dietBtn) => {
    dietBtn.addEventListener('click', addDietBtn)
})

function addDietBtn(event) {
    currentDietId = event.target.getAttribute('data-id');
    console.log(currentDietId);
    // newDiet.style.display = 'none';
    dietForm.style.display = 'block';
}

const HandleDietForm = async (event) => {
    event.preventDefault();

    console.log(event.target);

    const food_amount = document.querySelector('#amount').value.trim();
    const food_favorite = document.querySelector('#favorite').value.trim();
    const food_allergies = document.querySelector('#allergies').value.trim();

    if (!food_amount || !food_favorite || !food_allergies) {
        return;
    }

    const bodyObj = {
        food_amount,
        food_favorite,
        food_allergies,
        animal_id: currentDietId
    }

    console.log(bodyObj)

    try {
        const response = await fetch('/api/diet', {
            method: "POST",
            body: JSON.stringify(bodyObj),
            headers: {'content-type': 'application/json'},
        });

        if (!response.ok) {
            const res = await response.json();
            console.log(res);
            const errorMsg = res.message;
            return;
        }

    } catch(err) {
        console.log(err);
    }

};


dietForm.addEventListener('submit', HandleDietForm);