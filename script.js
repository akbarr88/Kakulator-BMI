            function hitungBMI() {
            const berat = parseFloat(document.getElementById('berat').value);
            const tinggi = parseFloat(document.getElementById('tinggi').value);

            if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
                document.getElementById('result').innerHTML = 'Masukkan berat dan tinggi yang valid.';
                return;
            }

            const tinggiMeter = tinggi / 100;
            const bmi = berat / (tinggiMeter * tinggiMeter);
            const bmiCategory = getBMICategory(bmi);

            document.getElementById('result').innerHTML = `BMI: ${bmi.toFixed(2)} - ${bmiCategory}`;
        }

        function getBMICategory(bmi) {
            if (bmi < 18.5) {
                return 'Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                return 'Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                return 'Overweight';
            } else {
                return 'Obesity';
            }
        }