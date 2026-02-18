const form = document.querySelector('.form');

function addActive() {
    form.classList.toggle('active');
}

form.addEventListener('click', (e) => {
    e.preventDefault();
})