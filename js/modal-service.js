// NEW
function setModal() {
    let modalBtn = document.getElementById('modalBtn');
    let closeBtn = document.getElementsByClassName('closeModalBtn')[0];
    //listen for open click
    modalBtn.addEventListener('click', openModal);
    //listen to close click
    closeBtn.addEventListener('click', closeModal);
    //to make the modal close when clicking outside the modal window
    window.addEventListener('click', clickOutside);
}

function openModal() {
    let modal = document.getElementById('aboutModal');
    modal.style.display = 'block';
}
function closeModal() {
    let modal = document.getElementById('aboutModal');
    modal.style.display = 'none';
}
function clickOutside(ev) {
    let modal = document.getElementById('aboutModal');
    if (ev.target === modal)
        modal.style.display = 'none';
}


