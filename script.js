// Mobile hamburger toggle
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
    mobileNav.style.display =
        mobileNav.style.display === "flex" ? "none" : "flex";
});
