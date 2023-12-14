const activityBtns = document.querySelectorAll(".new-activity-btn")
const newActivity = document.querySelector(".new-activity")
const activityForm = document.querySelector(".activity-form")


const activityFormModalBtn = document.querySelector('#Activity-modal');

let activityAnimalId = '';

activityBtns.forEach((activityBtn) => {
    activityBtn.addEventListener('click', addActivityBtn)
})

function addActivityBtn(event) {
    activityAnimalId = event.target.getAttribute('data-id');
    activityForm.style.display = "block"
}

const HandleActivityForm = async (event) => {
    event.preventDefault();

    const active_minutes_day  = document.querySelector('#active').value.trim();
    const avg_sleep_day = document.querySelector('#sleep').value.trim();
    const favorite_toy = document.querySelector('#toy').value.trim();

    if (!active_minutes_day || !favorite_toy || !avg_sleep_day ) {
    return;
    }

    const bodyObj = {
    active_minutes_day,
    favorite_toy,
    avg_sleep_day,
    animal_id: activityAnimalId
    }

    try {
    const response = await fetch('/api/activities', {
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
        const res = await response.json();
        console.log(res);
        const errorMsg = res.message;
        return;
    }

    document.location.reload();
    } catch (err) {
    console.log(err);
    }
};

activityForm.addEventListener('submit', HandleActivityForm);
activityFormModalBtn.addEventListener('click', HandleActivityForm);