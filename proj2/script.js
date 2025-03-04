const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight: ${weight}`;
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        if(BMI )
            results.innerHTML = `<span>${BMI}</span>`;
        console.log(BMI);
    }
});
