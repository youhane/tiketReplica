let orderWrapper = document.querySelector('.orderWrapper');

orderWrapper.addEventListener("click", function () {
    if (orderWrapper.classList.contains('modal')) {
        orderWrapper.classList.remove('modal');
    } else orderWrapper.classList += ' modal';
})

$('.flag').click(function () {
    $('.popUpLang').fadeToggle()
})

$('.currency').click(function () {
    $('.popUpCurrency').fadeToggle()
})