// Toggle mobile menu
document.getElementById("toggle").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("toggle");
    document.getElementById("toggle").classList.toggle("active");
});

// Remove mobile menu clicking outside
document.addEventListener("click", (e) => {
    if (document.getElementById("mobile-menu").classList.contains("toggle") && document.getElementById("toggle").classList.contains("active"))
        if (!document.getElementById("toggle").contains(e.target) && !document.getElementById("mobile-menu").contains(e.target)) {
            document.getElementById("mobile-menu").classList.remove("toggle");
            document.getElementById("toggle").classList.remove("active");
        }
})