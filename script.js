function toggleDiv(id, el) {
    const div = document.getElementById(id);
    div.style.display = div.style.display === "none" ? "block" : "none";
    el.classList.toggle("open");
}