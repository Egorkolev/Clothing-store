// поиск елемента в HTML
let drop_box = document.querySelector('.dropBox');

let filter = document.querySelector('.button_filter');

// событие клик (по нажатию на кнопку открывать дроп-бокс)
filter.addEventListener('click', function() {
    drop_box.classList.toggle('open-dropbox');
});


// Product Color choose
let imgColor = document.querySelectorAll('.imgColor');
let bodyColor = document.querySelector('.body-color')

imgColor.addEventListener('click', function() {
    bodyColor.value + imgColor.value;
})
