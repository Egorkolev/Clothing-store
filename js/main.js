// поиск елемента в HTML
let drop_box = document.querySelector('.dropBox');
console.log(drop_box);

let filter = document.querySelector('.button_filter');
console.log(filter);

// событие клик (по нажатию на кнопку открывать дроп-бокс)
filter.addEventListener( "click", function(){
    drop_box.classList.toggle('open-dropbox');
});
