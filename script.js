let oscar = document.getElementById('main_picture');
let klicker = document.getElementById('clicks');

oscar.addEventListener('click', function() {
    let header = document.getElementById('main-header');
    header.classList.toggle('hidden');
    klicker.innerHTML++;

});


