function isNumber(value) {
    return !isNaN(value);
}

function ambilData() {
    let berat = document.getElementById('berat').value;
    let tinggi = document.getElementById('tinggi').value;

    let formData = {
        berat: berat,
        tinggi: tinggi
    };
    return formData;
}

function validateFormData(formData) {
    return formData !== null &&
           isNumber(formData.berat) &&
           isNumber(formData.tinggi);
}

function submit(event) {
    event.preventDefault();

    const pesan = document.getElementById('pemberitahuan');
    let formData = ambilData();
    if (validateFormData(formData)) {
        let berat = parseFloat(formData.berat);
        let tinggi = parseFloat(formData.tinggi);
        if (!isNaN(berat) && !isNaN(tinggi) && tinggi > 0) {
            let bmi = berat / Math.pow(tinggi / 100, 2);
            bmi = bmi.toFixed(1);
            if (bmi < 18.5) {
                pesan.innerHTML = 'Your BMI is <strong>' + bmi + '</strong> which means you are <strong>Underweight</strong>';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                pesan.innerHTML = 'Your BMI is <strong>' + bmi + '</strong> which means you are <strong>Normal</strong>';
            } else if (bmi >= 25 && bmi <= 29.9) {
                pesan.innerHTML = 'Your BMI is <strong>' + bmi + '</strong> which means you are <strong>Overweight</strong>';
            } else if (bmi >= 30) {
                pesan.innerHTML = 'Your BMI is <strong>' + bmi + '</strong> which means you are <strong>Obesity</strong>';
            }
        } else {
            pesan.innerHTML = 'Tolong masukkan tinggi dan berat anda';
        }
    } else {
        pesan.innerHTML = 'Tolong Masukkan Data Berupa Angka.';
    }
}

const form = document.getElementById("submit-form");
form.addEventListener('click', submit);
