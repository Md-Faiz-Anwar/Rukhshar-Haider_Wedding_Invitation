/* =====================================================
   RUKHSHAR & HAIDER
   WEDDING INVITATION
   JAVASCRIPT
===================================================== */


/* =====================================================
   1. OPENING ENVELOPE
===================================================== */

const openingScreen =
    document.getElementById("openingScreen");

const mainInvitation =
    document.getElementById("mainInvitation");

const openButton =
    document.getElementById("openInvitation");

const envelope =
    document.querySelector(".envelope");


openButton.addEventListener("click", function () {

    /* Open envelope */

    envelope.classList.add("open");


    /* Small delay for envelope animation */

    setTimeout(function () {

        openingScreen.classList.add("hide");

        mainInvitation.classList.add("visible");

        document.body.style.overflow = "auto";


        /* Scroll to top */

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


    }, 900);

});



/* Prevent scrolling before opening */

document.body.style.overflow = "hidden";



/* =====================================================
   2. SMOOTH SECTION SCROLL
===================================================== */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}



/* =====================================================
   3. COUNTDOWN TIMER
===================================================== */

/*
    Wedding date:

    12 November 2026

    Since exact Nikah time has not been provided,
    countdown currently ends at midnight.

    When you know the time, change:

    T00:00:00

    Example:

    T19:30:00
*/

const weddingDate =
    new Date("2026-11-12T00:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    /* Wedding date reached */

    if (difference <= 0) {

        document.getElementById("days")
            .textContent = "00";

        document.getElementById("hours")
            .textContent = "00";

        document.getElementById("minutes")
            .textContent = "00";

        document.getElementById("seconds")
            .textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


/* Start countdown */

updateCountdown();

setInterval(updateCountdown, 1000);



/* =====================================================
   4. SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".person-card, " +
        ".event-card, " +
        ".venue-card, " +
        ".rsvp-form, " +
        ".countdown-content"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    /*
                        Small delay allows
                        CSS animation to trigger.
                    */

                    setTimeout(function () {

                        entry.target.classList.add("show");

                    }, 50);


                    revealObserver
                        .unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



/* =====================================================
   6. MUSIC PLAYER
===================================================== */

const music = document.getElementById("weddingMusic");

let musicPlaying = false;


/* Start music automatically when invitation is opened */
const openInvitation = document.getElementById("openInvitation");

openInvitation.addEventListener("click", function () {

    music.volume = 0.7;

    music.play()
        .then(function () {

            musicPlaying = true;

        })
        .catch(function () {

            console.log(
                "Music could not be played. Please check music/wedding.mp3"
            );

        });

});



/* =====================================================
   7. FLOATING PARTICLES
===================================================== */

function createParticle() {

    const particle =
        document.createElement("span");


    particle.className =
        "floating-particle";


    particle.style.position =
        "fixed";


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.bottom =
        "-10px";


    const size =
        Math.random() * 4 + 2;


    particle.style.width =
        size + "px";


    particle.style.height =
        size + "px";


    particle.style.borderRadius =
        "50%";


    particle.style.background =
        "#b89a5a";


    particle.style.pointerEvents =
        "none";


    particle.style.zIndex =
        "5";


    particle.style.opacity =
        "0";


    particle.style.animation =
        "particleFloat " +
        (Math.random() * 5 + 6) +
        "s linear forwards";


    document.body.appendChild(particle);


    setTimeout(function () {

        particle.remove();

    }, 12000);

}


setInterval(createParticle, 900);



/* =====================================================
   8. ADD PARTICLE ANIMATION
===================================================== */

const particleStyle =
    document.createElement("style");


// particleStyle.innerHTML = 

// @keyframes particleFloat {

//     0% {
//         transform:
//             translateY(0)
//             translateX(0)
//             scale(.5);

//         opacity: 0;
//     }

//     15% {
//         opacity: .7;
//     }

//     50% {
//         transform:
//             translateY(-50vh)
//             translateX(20px)
//             scale(1);

//         opacity: .5;
//     }

//     100% {
//         transform:
//             translateY(-110vh)
//             translateX(-20px)
//             scale(.2);

//         opacity: 0;
//     }

// };

document.head.appendChild(particleStyle);



/* =====================================================
   9. IMAGE FALLBACK
===================================================== */

const bridePhoto =
    document.getElementById("bridePhoto");

const groomPhoto =
    document.getElementById("groomPhoto");


bridePhoto.addEventListener("error", function () {

    this.src =
        "https://placehold.co/600x750/f5f1e8/173d32?text=Rukhshar";

});


groomPhoto.addEventListener("error", function () {

    this.src =
        "https://placehold.co/600x750/f5f1e8/173d32?text=Haider";

});



/* =====================================================
   10. PAGE LOAD
===================================================== */

window.addEventListener("load", function () {

    /*
        Keep opening screen visible
        until user clicks the button.
    */

    console.log(
        "Rukhshar & Haider Wedding Invitation loaded."
    );

});

