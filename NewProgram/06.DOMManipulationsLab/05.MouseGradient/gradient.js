function attachGradientEvents() {
    let result = document.querySelector('#result');
    let gradient = document.querySelector('#gradient');

    gradient.addEventListener('click', getXPosition);
    
    function getXPosition(e) {
        let gradientWitdh = Number(gradient.clientWidth);
        let postionX = Number(e.pageX);
        let pageOffsetX = Number(gradient.offsetLeft)

        result.textContent = (Math.floor(((postionX - pageOffsetX) / gradientWitdh) * 100) + '%');
    }
} 

// function attachGradientEvents() {
//     let $gradient = $('#gradient');    
//     let $result = $('#result');

//     $gradient.on('mousemove', (e) => {
//         let rectangle = e.target.getBoundingClientRect();

//         let y = parseInt(e.offsetX);
//         let x = parseInt(rectangle.left);
//         let result = Math.floor((y - x) * 100 / 300);

//         $result.text(`${result}%`);
//     });
// }