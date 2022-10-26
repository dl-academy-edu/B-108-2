var popupBtn = document.querySelector('.button_js');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close-btn');
var input = modal.querySelector('input');

popupBtn.addEventListener('click', function(){
    modal.classList.add('modal_open');
    input.focus();
});

closeBtn.addEventListener('click', function(){
    modal.classList.remove('modal_open');
    popupBtn.focus();
});

window.addEventListener('keydown', function(event){
    if (event.code === "Escape" && modal.classList.contains('modal_open')) {
        // if (modal.classList.contains('modal_open')) {
            modal.classList.remove('modal_open');
            popupBtn.focus();
        // }
    }
});
