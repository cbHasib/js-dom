let count = 0;




const plusBtn = document.getElementById('countPlus');
plusBtn.addEventListener('click', function(){
    count += 1;
    document.getElementById('count').innerText = count;
    if(count > 0){
        document.getElementById('count').style.color = 'green';
    }
});

const minusBtn = document.getElementById('countMinus');
minusBtn.addEventListener('click', function(){
    count -= 1;
    document.getElementById('count').innerText = count;
    if(count < 0){
        document.getElementById('count').style.color = 'red';
    }
});

