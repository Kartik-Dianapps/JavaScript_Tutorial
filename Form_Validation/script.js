function SetError(id, err) {
    const element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = err;
}

function clearErrors() {
    const errors = document.getElementsByClassName("formerror");
    for (let e of errors) {
        e.innerHTML = "";
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    clearErrors();

    let isValid = true; // Track if the form is valid

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phoneNumber").value;
    const pswd = document.getElementById("pswd").value;
    const cnfrpswd = document.getElementById("cnfr").value;

    if (name.length >= 10) {
        SetError("div1", "*name should not be greater than length of 10");
        isValid = false;
    }
    if (email.length > 20) {
        SetError("div2", "*email should not be greater than length of 20");
        isValid = false;
    }
    if (phone.length !== 10) {
        SetError("div3", "*Phone Number should be exactly 10 digits");
        isValid = false;
    }
    if (pswd.length > 6) {
        SetError("div4", "*password should not be greater than 6 characters");
        isValid = false;
    }
    if (cnfrpswd !== pswd) {
        SetError("div5", "*please enter the same password as above");
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("pswd", pswd);
        window.location.href = "display.html";
    }
});
