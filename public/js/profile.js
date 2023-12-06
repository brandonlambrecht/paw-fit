const healthBtn = document.querySelector('.new-health-btn');
const healthNew = document.querySelector('.new-health');
const healthForm = document.querySelector('.health-form');

healthBtn.addEventListener('click', addHealthBtn)

function addHealthBtn () {
    healthNew.style.display = 'none';
    healthForm.style.display = 'block';
}

const HandleHealthForm = async (event) => {
    event.preventDefault();

    const pet_vac = document.querySelector('#health').value.trim();
    const pet_neuter = document.querySelector('#neuter').value.trim();
    const pet_disease = document.querySelector('#disease').value.trim();

    if (!pet_vac || !pet_neuter || !pet_disease) {
    // showError(loginFormEl, 'Please fill in the information')
        console.log('hit')
        return;
    }

    const bodyObj = {
        pet_vac,
        pet_neuter,
        pet_disease
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