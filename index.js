let formValidation = document.getElementById("validation");

formValidation.addEventListener('submit', function(e) {
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let regex = /^[a-zA-Z-\s]+$/;

    if (firstname.value.trim() == "") {
        let error = document.getElementById('errorName');
        error.innerHTML = "Ce champ est requis";
        error.style.color = 'red';
        e.preventDefault();
    } else if (regex.test(firstname.value) == false) {
        let error = document.getElementById('errorName');
        error.innerHTML = "Le nom ne doit comporter que des lettres et/ou des tirets";
        error.style.color = 'red';
        e.preventDefault();
    }

    if (lastname.value.trim() == "") {
        let error2 = document.getElementById('error2Name');
        error2.innerHTML = "Ce champ est requis";
        error2.style.color = 'red';
        e.preventDefault();
    } else if (regex.test(lastname.value) == false) {
        let error2 = document.getElementById('error2Name');
        error2.innerHTML = "Le nom ne doit comporter que des lettres et/ou des tirets";
        error2.style.color = 'red';
        e.preventDefault();
    }
})