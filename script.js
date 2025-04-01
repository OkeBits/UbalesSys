function goBack() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidePanel = document.querySelector(".side-panel");
    const closeBtn = document.querySelector(".close-btn");

    function toggleMenu() {
        if (sidePanel.style.right === "0px") {
            sidePanel.style.right = "-70%";
        } else {
            sidePanel.style.right = "0px";
        }
    }

    menuIcon.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidePanel.contains(event.target) && !menuIcon.contains(event.target)) {
            sidePanel.style.right = "-70%";
        }
    });
});
