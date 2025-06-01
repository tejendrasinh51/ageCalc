const form = document.getElementById('ageForm');
const dob = document.getElementById('birthdate');
const resultele = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const birthdayStr = dob.value;
    if (!birthdayStr) {
        resultele.innerHTML = "<h3>Please select your birthdate.</h3>";
        return;
    }

    const birthday = new Date(birthdayStr);
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();

    const hasBirthdayPassedThisYear =
        today.getMonth() > birthday.getMonth() ||
        (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

    if (!hasBirthdayPassedThisYear) {
        age--;
    }

    resultele.innerHTML = `<h3>Your age is ${age}</h3>`;
});
