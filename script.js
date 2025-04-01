function goBack() {
    window.location.href = "/";
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidePanel = document.querySelector(".side-panel");
    const closeBtn = document.querySelector(".close-btn");

    // Ensure menu button is visible on mobile
    menuIcon.style.display = "block";

    // Ensure side-panel is hidden on mobile
    sidePanel.style.right = "-100%";

    // Toggle menu
    menuIcon.addEventListener("click", function () {
        sidePanel.style.right = "1";
    });

    // Close menu
    closeBtn.addEventListener("click", function () {
        sidePanel.style.right = "-70%";
    });
});
