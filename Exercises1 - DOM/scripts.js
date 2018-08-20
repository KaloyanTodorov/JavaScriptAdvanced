function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
//    console.log(num1 + " + " + num2);

    document.getElementById('sum-it').value = Number(num1) + Number(num2);
}

function showText() {
    document.getElementById('text').style.display = 'inline';
    document.getElementById('more').style.display = 'none';
}

function extractText() {
    // for (element of document.getElementsByTagName('li')) {
    //     document.getElementById('result').value += element.innerText + '\n';
    // }

        let itemNodes = document.querySelectorAll('ul#items li');
        let textarea = document.querySelector('#result');

    for (let node of itemNodes) {
        textarea.value += node.textContent + '\n';
    }
}

function countdown(startTime) {
    let time = startTime;
    let box = document.getElementById('time');
    setInterval(decrement, 1000);
    
    function decrement() {
        time--;
        box.value = Math.trunc(time / 60) + ':' + ('0' + (time % 60)).slice(-2);
    }
}

function colorize() {
    let rows = document.querySelectorAll('table tr');
    let index = 1;

    for (let row of rows) {
        if (index % 2 === 0) {
            row.style.background = 'teal';
        }
        index++;
    }
}

// function extract(elementID) {
//     let content = document.getElementById(elementID).textContent;
//     let pattern = /\(([^)]+)\)/g;
//     let result = [];
//
//     let match = pattern.exec(content);
//     while (match) {
//         result.push(match[1]);
//         match = pattern.exec(content);
//     }
//
//     return result.join('; ');
// }

function append() {
    let appendToID = document.getElementById('append');
    appendToID.style.color = '#5342f4';
    appendToID.appendChild(document.createElement('hr'));
}

function addItem() {
    let inputElement = document.getElementById('new-item-text');
    if(inputElement.value.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = inputElement.value;
        document.getElementById('items').appendChild(li);
        inputElement.value = '';
    }
}

function sum() {
    let table = document.querySelectorAll('table#sum-table tr');
    let total = 0;
    for (let i = 1; i < table.length - 1; i++) {
        let cell = table[i].children;
        console.log(cell[cell.length - 1]);
        total += Number(cell[cell.length - 1].textContent);
    }

    document.getElementById('sum').textContent = total;
}

