document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");

    if (toggle && links) {
        toggle.addEventListener("click", function () {
            links.classList.toggle("open");
        });

        document.querySelectorAll("#nav-links a").forEach(function (link) {
            link.addEventListener("click", function () {
                links.classList.remove("open");
            });
        });
    }

    window.addEventListener("scroll", function () {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 10);
        }
    });

    var fadeEls = document.querySelectorAll(".fade-in");
    if (fadeEls.length > 0 && "IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        fadeEls.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        fadeEls.forEach(function (el) {
            el.classList.add("visible");
        });
    }
});
