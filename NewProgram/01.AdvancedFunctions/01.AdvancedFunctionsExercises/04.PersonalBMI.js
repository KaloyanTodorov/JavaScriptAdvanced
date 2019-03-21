function solve(name, age, weightInKg, heightInCm) {
    const heightInM = heightInCm / 100;
    const bmi = weightInKg / heightInM ** 2;
    let status = '';
    if(bmi < 18.5) {
        status = 'underweight';
    } else if(bmi < 25) {
        status = 'normal';
    } else if(bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    }
    
    const infoToReturn = {
        name,
        personalInfo: {
            age,
            weight: weightInKg,
            height: heightInCm,
        },
        BMI: Math.round(bmi),
        status
    }

    if(infoToReturn.status === 'obese') {
        infoToReturn.recommendation = 'admission required';
    }

    return infoToReturn;

}

console.log(solve('Kaloyan', 32, 49, 180));
console.log(solve("Peter", 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));