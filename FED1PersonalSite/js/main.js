﻿//Copyright year
let copyrightYear = document.getElementById('copyrightYear');
copyrightYear.textContent = new Date().getFullYear();

function sendContactUs() {
    let name = document.getElementById('tbName').value;

    let email = document.getElementById('tbEmail').value;

    let message = document.getElementById('tbMessage').value;

    if (!name) {
        alert("Your Name Must Be Filled In.")
    }
    else
        if (!validateEmail(email)) {
            alert("Your Email Must Be Filled In With Correct Format.")
        }
        else
            if (!message) {
                alert("Your Message Must Be Filled In.")
            }
            else
            {
                let messageBack = document.getElementById('messageBack');

                //Display the total weight
                messageBack.textContent = "Thank you for contacting me, I will respond as soon as possible";
            }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
