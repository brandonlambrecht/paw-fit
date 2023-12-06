const healthBtns = document.querySelectorAll('.new-health-btn');
const healthNew = document.querySelector('.new-health');
const healthForm = document.querySelector('.health-form');

let currentAnimalId = '';

healthBtns.forEach((healthBtn) => {
    healthBtn.addEventListener('click', addHealthBtn)
})


function addHealthBtn (event) {
    currentAnimalId = event.target.getAttribute('data-id');
    console.log(currentAnimalId);
    healthNew.style.display = 'none';
    healthForm.style.display = 'block';
}

const HandleHealthForm = async (event) => {
    event.preventDefault();

    console.log(event.target);

    const health_vaccination = document.querySelector('#health').value.trim();
    const health_neuter = document.querySelector('#neuter').value.trim();
    const health_diseases = document.querySelector('#disease').value.trim();


    if (!health_vaccination || !health_neuter || !health_diseases) {
    // showError(loginFormEl, 'Please fill in the information')
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
            // showError(healthForm, errorMsg);
            return;
    }

    // document.location.replace('/dashboard');
    } catch(err) {
        console.log(err);
        // showError(healthForm, 'A login error has ocurred')
    }
};

healthForm.addEventListener('submit', HandleHealthForm);