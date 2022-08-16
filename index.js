const classList = document.getElementsByClassName('test');
for(const test of classList){

    console.log(test.innerText);
}

const title = document.getElementById('main-title');
title.innerText = 'Update Text from JS';
// title.style.color = 'tomato';
// title.style.backgroundColor = 'skyblue';
title.style.padding = '20px';
title.style.borderRadius = '20px';
title.style.boxShadow = '0px 5px 20px 0px #df3453'
title.classList.add('last');
console.log(title.innerText);


const element = document.querySelectorAll('.test');
for (const query of element){

    console.log(query.innerText);
}





const div = document.getElementById('div');
const h2 = document.createElement('h2');
h2.innerText = 'testing file added from JS';
div.appendChild(h2);