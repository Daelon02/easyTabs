function modal() {
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descriptionBtn = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });


    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    })

    descriptionBtn.forEach.call(descriptionBtn,function(descript) {
    descript.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('description-btn-splash');
        document.body.style.overflow = 'hidden';
    });
});
}
module.exports = modal;