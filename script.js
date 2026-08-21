// ==============================
// Mobile Menu
// ==============================

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// ==============================
// Course Notification
// ==============================

function showMessage(course) {

    const notification =
        document.getElementById("notification");


    notification.textContent =
        `🎉 ممتاز! اخترت كورس ${course}. سيتم التواصل معك قريبًا.`;


    notification.classList.add("show");


    setTimeout(function () {

        notification.classList.remove("show");

    }, 3000);

}


// ==============================
// Contact Form
// ==============================

function sendForm(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const notification =
        document.getElementById("notification");


    notification.textContent =
        `✅ شكرًا ${name}! تم إرسال رسالتك بنجاح.`;


    notification.classList.add("show");


    document.querySelector("form").reset();


    setTimeout(function () {

        notification.classList.remove("show");

    }, 3000);

}


// ==============================
// Close Mobile Menu
// ==============================

const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});
