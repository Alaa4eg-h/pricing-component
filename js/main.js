const controlContainer = document.querySelector('.plan-control-container');
const controlBtn = document.querySelector('.plan-control');

controlContainer.addEventListener('click', function (e) {
    if (controlBtn.classList.contains('annually')) {
        controlBtn.classList.add('monthly');
        controlBtn.classList.remove('annually');
    } else {
        controlBtn.classList.add('annually');
    }
});