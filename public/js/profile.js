const healthBtns = document.querySelectorAll('.new-health-btn');
const healthNew = document.querySelector('.new-health');
const healthForm = document.querySelector('.health-form');
const removeHealthBtn = document.querySelectorAll('.remove-health-btn')

const modalHealthFormBtn = document.querySelector('#modal-submit');

let currentAnimalId = '';

healthBtns.forEach((healthBtn) => {
    healthBtn.addEventListener('click', addHealthBtn)
})


function addHealthBtn (event) {
    currentAnimalId = event.target.getAttribute('data-id');
    console.log(currentAnimalId);
    healthForm.style.display = 'block';
}

const HandleHealthForm = async (event) => {
    event.preventDefault();

    console.log(event.target);

    const health_vaccination = document.querySelector('#health').value.trim();
    const health_neuter = document.querySelector('#neuter').value.trim();
    const health_diseases = document.querySelector('#disease').value.trim();


    if (!health_vaccination || !health_neuter || !health_diseases) {
        console.log('hit')
        return;
    }
    console.log('here')

    const bodyObj = {
        health_vaccination,
        health_neuter,
        health_diseases,
        animal_id: currentAnimalId
    }

    console.log(bodyObj)

    try {
        const response = await fetch('/api/health', {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {'content-type': 'application/json'},
        });

        if (!response.ok) {
            const res = await response.json();
            console.log(res);
            const errorMsg = res.message;
            return;
    }

    document.location.reload();
    } catch(err) {
        console.log(err);
    }
};

const deleteHealthForm = async(event) => {
    event.preventDefault();

    const health_id = event.target.getAttribute('data-id');

    try {
    const response = await fetch(`/api/animals/${health_id}`, {
        method: 'delete',
        headers: { 'content-type': 'application/json'},
    });

    if (!response.ok) {
        const res = await response.json();
        console.log(res);
        return;
    }

    document.location.reload();
    } catch(err) {
        console.log(err);
    } 
}

removeHealthBtn.forEach((button) => {
    button.addEventListener('click', deleteHealthForm)
});


healthForm.addEventListener('submit', HandleHealthForm);

modalHealthFormBtn.addEventListener('click', HandleHealthForm);
