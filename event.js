function makeRed(){
    document.body.style.backgroundColor = 'red';
}
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

const dangerBtn = document.getElementById('btnDanger');
dangerBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'gray';
})