function focus() {
    let inputFields = document.getElementsByTagName('input');
    Array.from(inputFields).forEach(i => {
        i.addEventListener('focus', (event) => {
            event.target.parentNode.className = 'focused';
        });
        i.addEventListener('blur', (event) => {
            event.target.parentNode.removeAttribute('class');
        })
    })
}