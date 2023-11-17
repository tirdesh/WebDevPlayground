const clickBtn = document.getElementById('click-me-btn')
clickBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log(evt.eventPhase);
    alert('Thank you for clicking!');
})

const boxes = document.querySelectorAll('.box');
const listner = (evt) => {
    alert(`Current Div: ${evt.currentTarget.getAttribute('x-data')} \n
    Event Target Div: ${evt.target.getAttribute('x-data')} \n
    Event Phase: ${evt.eventPhase} 
    `);
}
boxes.forEach((element) => {
    element.addEventListener('click', listner);
    element.addEventListener('click', listner, true);    
})
