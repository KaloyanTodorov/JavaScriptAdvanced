function solve(worker) {
    if(worker.handsShaking) {
        const requiredAmount = 0.1;
        worker.bloodAlcoholLevel += worker.weight * worker.experience * requiredAmount;
        worker.handsShaking = false;
    }

    return worker;
}


const worker1 = { 
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true 
};
const worker2 = { 
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true 
};
const worker3 = { 
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false 
};

console.log(solve(worker2));
// solve(worker2);
// solve(worker3);