let menuBar = document.querySelector(".fas");
let ulTag = document.querySelector("ul");

menuBar.addEventListener("click", () => {
    if (menuBar.classList.contains("show")) {
        ulTag.style.left = `-100%`;
        menuBar.classList.remove("show");
    } else {
        ulTag.style.left = `0%`;
        menuBar.classList.add("show");
    }
});

window.addEventListener("scroll", () => {
    ulTag.style.left = `-100%`;
})