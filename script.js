/* =========================================================
   DEV TUITION CLASSES - JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. AUTOMATIC COPYRIGHT YEAR
       ===================================================== */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const currentYear = new Date().getFullYear();

        copyright.textContent =
            `© ${currentYear} DEV Tuition Classes. All Rights Reserved.`;
    }


    /* =====================================================
       2. ACTIVE NAVIGATION
       ===================================================== */

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll(".navbar nav a");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            link.classList.add("active");
        }

    });


    /* =====================================================
       3. SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".feature-card, " +
            ".approach-card, " +
            ".course-card, " +
            ".contact-card, " +
            ".class-item, " +
            ".fee-container, " +
            ".intro-text, " +
            ".about-text, " +
            ".teacher-profile"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =====================================================
       4. BUTTON CLICK EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.classList.add("clicked");

            setTimeout(function () {

                button.classList.remove("clicked");

            }, 250);

        });

    });


    /* =====================================================
       5. IMAGE ERROR CHECK
       ===================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            console.log(
                "Image could not be loaded:",
                image.getAttribute("src")
            );

        });

    });

});

// SHOW SELECTED MEDIUM FEES
function showFees(medium, button) {

    document.querySelectorAll(".medium-fee").forEach(function (table) {
        table.style.display = "none";
    });

    document.getElementById(medium).style.display = "block";

    document.querySelectorAll(".medium-btn").forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}