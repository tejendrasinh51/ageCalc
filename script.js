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
    const now = new Date();

    if (birthday > now) {
        resultele.innerHTML = "<h3>Birthdate can't be in the future!</h3>";
        return;
    }

    let diffMs = now - birthday;

    const msInMinute = 60 * 1000;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;

    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();
    let days = now.getDate() - birthday.getDate();
    let hours = now.getHours() - birthday.getHours();
    let minutes = now.getMinutes() - birthday.getMinutes();

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonth;
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    resultele.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 180px; gap:10px">
        <h3>Your age is:</h3>
        <p>${years} years, ${months} months, ${days} days, ${hours} hours, and ${minutes} minutes</p>
        </div>

    `;
});
