function goBack() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidePanel = document.querySelector(".side-panel");
    const closeBtn = document.querySelector(".close-btn");

    menuIcon.addEventListener("click", function () {
        sidePanel.style.right = "0";
    });

    closeBtn.addEventListener("click", function () {
        sidePanel.style.right = "-50%";
    });
});
