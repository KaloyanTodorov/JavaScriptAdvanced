function solve(arr) {
    let currentStr = '';

    arr.forEach(element => {
        const args = element.split(' ');
        const command = args[0];
        if(command === 'append') {
            currentStr += args[1];
        } else if(command === 'removeStart') {
            currentStr = currentStr.slice(args[1]);
        } else if(command === 'removeEnd') {
            currentStr = currentStr.slice(0, currentStr.length - args[1]);
        } else if(command === 'print') {
            console.log(currentStr)
        }

    });
}

solve(['append hello',
'append again',
'removeStart 3',
'removeEnd 4',
'print']);

solve(['append 123',
'append 45',
'removeStart 2',
'removeEnd 1',
'print'])