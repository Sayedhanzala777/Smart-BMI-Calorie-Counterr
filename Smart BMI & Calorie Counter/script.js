function calculate() {
    // Get inputs
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let activity = parseFloat(document.getElementById("activity").value);
    let caloriesConsumed = parseFloat(document.getElementById("caloriesConsumed").value);

    if (!age || !height || !weight || !caloriesConsumed) {
        alert("Please fill all fields");
        return;
    }

    // BMI
    let heightM = height / 100;
    let bmi = weight / (heightM * heightM);
    let bmiCategory = "";
    let bmiColor = "";
    if (bmi < 18.5) { bmiCategory = "Underweight"; bmiColor = "orange"; }
    else if (bmi < 24.9) { bmiCategory = "Normal weight"; bmiColor = "green"; }
    else if (bmi < 29.9) { bmiCategory = "Overweight"; bmiColor = "orange"; }
    else { bmiCategory = "Obese"; bmiColor = "red"; }

    document.getElementById("bmiResult").innerHTML = `Your BMI is <span style="color:${bmiColor}; font-weight:bold">${bmi.toFixed(2)} (${bmiCategory})</span>`;

    // BMR
    let bmr = gender === "male" ? 10*weight + 6.25*height - 5*age + 5 : 10*weight + 6.25*height - 5*age -161;
    let tdee = bmr * activity;
    document.getElementById("tdeeResult").innerText = `Your daily calorie requirement: ${Math.round(tdee)} kcal`;

    // Calorie deficit/surplus
    let diff = caloriesConsumed - tdee;
    let diffText = "";
    if(diff > 0) diffText = `You are in a calorie surplus of ${Math.round(diff)} kcal.`;
    else if(diff < 0) diffText = `You are in a calorie deficit of ${Math.abs(Math.round(diff))} kcal.`;
    else diffText = `You met your calorie goal perfectly today!`;

    document.getElementById("calorieDeficit").innerText = diffText;
}
