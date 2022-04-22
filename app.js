const boxItems = document.querySelectorAll(".progress-box .box-item");
const progresBox = document.querySelector(".progress-box .progress");
const prev = document.querySelector(".progress-btn .btn-prev");
const next = document.querySelector(".progress-btn .btn-next");

let count = 1;

next.addEventListener("click", () => {
    count++;
    if (count >= boxItems.length) {
        count = boxItems.length;
    }
    update();
});
prev.addEventListener("click", () => {
    count--;
    if (count <= 1) {
        count = 1;
    }
    update();
});

function update() {
    boxItems.forEach((item, index) => {
        if (index < count) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");

    progresBox.style.width = `${
        ((actives.length - 1) / (boxItems.length - 1)) * 100
    }%`;

    if (count === 1) {
        prev.disabled = true;
    } else if (count === boxItems.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
