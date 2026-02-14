function askName() {
    let name = prompt("Siapa nama kamu?", "hanifan");
    if (name === null || name === "") {
        name = "";
    }
    const welcomeHeading = document.getElementById('welcomeText');
    if (welcomeHeading) {
        welcomeHeading.innerText = `Hii ${name}, Welcome to Our company`;
    }
    window.currentUserName = name;
}
window.onload = askName;

const form = document.getElementById('messageForm');
const formContainer = document.getElementById('formContainer');
const outputWrapper = document.getElementById('outputWrapper');
const btnDelete = document.getElementById('btnDelete');
const welcomeHeading = document.getElementById('welcomeText');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('inputNama').value;
    const tgl = document.getElementById('inputTgl').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('inputPesan').value;
    const namaInput = document.getElementById('inputNama').value;

    document.getElementById('welcomeText').innerText = `Hii ${namaInput}, Welcome to Our company`;

    const now = new Date();
    document.getElementById('currentTime').innerText = "Submitted on: " + now.toLocaleString();
    document.getElementById('resNama').innerText = nama;
    document.getElementById('resTgl').innerText = tgl;
    document.getElementById('resGender').innerText = gender;
    document.getElementById('resPesan').innerText = pesan;

    formContainer.classList.remove('max-w-2xl', 'mx-auto');
    formContainer.classList.add('md:w-1/2', 'mx-0');

    outputWrapper.classList.remove('hidden');

    setTimeout(() => {
        outputWrapper.classList.remove('opacity-0');
        outputWrapper.classList.add('opacity-100');
    }, 50);
});

btnDelete.addEventListener('click', function () {
    outputWrapper.classList.add('opacity-0');
    outputWrapper.classList.remove('opacity-100');

    setTimeout(() => {
        outputWrapper.classList.add('hidden');

        formContainer.classList.add('max-w-2xl', 'mx-auto');
        formContainer.classList.remove('md:w-1/2', 'mx-0');

        form.reset();
    }, 700);
});

