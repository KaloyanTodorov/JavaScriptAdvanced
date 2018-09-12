function calculateBMI(name, age, weight, height) {
    let heightInMetres = height / 100;
    let bmi = weight / (heightInMetres * heightInMetres);
    let stat;

    if(bmi < 18.5) {
        stat = "underweight";
    } else if (18.5 <= bmi && bmi < 25) {
        stat = "normal";
    } else if (25 <= bmi && bmi < 30) {
        stat = "overweight";
    } else {
        stat = "obese"
    }

    bmi = Math.round(bmi);

    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height    
        },
        BMI: bmi,
        status: stat
    }

    if(stat === "obese") {
        result['recommendation'] = "admission required";
    }

    return result;
}

calculateBMI("Peter", 29, 75, 182);