const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
});

const destinationInput = document.getElementById("destination");

document.querySelectorAll("[data-destination]").forEach(button => {
    button.addEventListener("click", () => {
        const destination = button.dataset.destination;
        destinationInput.value = destination;
        document.getElementById("plan").scrollIntoView({ behavior: "smooth" });
        setTimeout(() => document.getElementById("traveler").focus(), 650);
    });
});

document.getElementById("tripForm").addEventListener("submit", event => {
    event.preventDefault();

    const toast = document.getElementById("toast");
    toast.textContent = "Your trip idea is ready for Tiffany. (Prototype)";
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 3500);
    event.target.reset();
});
