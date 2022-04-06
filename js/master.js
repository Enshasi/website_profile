let gear = document.querySelector(".gear i");
let mune = document.querySelector(".mune ");
gear.onclick = function() {
    mune.classList.toggle("open");
    // this.classList.toggle("fa-spin");
};

let Linkes = document.querySelectorAll(".choose li");
let imageContent = document.querySelectorAll(".images-content .box ");

Linkes.forEach((e) => {
    e.addEventListener("click", (el) => {
        Linkes.forEach((e) => {
            e.classList.remove("active");
        });
        el.target.classList.add("active");
        imageContent.forEach((img) => {
            img.style.display = "none";
        });
        document.querySelectorAll(el.target.dataset.change).forEach((imgs) => {
            imgs.style.display = "block";
        });
    });
});

///Click The Image in OverAll Screen
let images = document.querySelectorAll(
    ".profile .content .images-content .box img"
);

images.forEach((imag) => {
    imag.addEventListener("click", (img) => {
        let overlay = document.createElement("div");
        let pargrah = document.createElement("p");
        let close = document.createElement("div");
        let textNode = document.createTextNode("X");
        let image = document.createElement("img");
        overlay.className = "overlay";
        pargrah.className = "pargrah";
        image.className = "image";
        close.className = "close";
        image.src = imag.src;
        close.appendChild(textNode);
        pargrah.appendChild(close);
        pargrah.appendChild(image);
        document.body.appendChild(overlay);
        document.body.appendChild(pargrah);
        document.body.style.cursor = "zoom-out";
    });
});
document.addEventListener("click", function(e) {
    if (e.target.className === "close") {
        document.querySelector(".overlay").remove();
        document.querySelector(".pargrah").remove();
        document.body.style.cursor = "auto";
    }
});
document.addEventListener("click", function(e) {
    if (e.target.className === "overlay") {
        document.querySelector(".overlay").remove();
        document.querySelector(".pargrah").remove();
        document.body.style.cursor = "auto";
    }
});

//mune change-color
let iconLoop = document.querySelector(".icon-loop i");
let changeColor = document.querySelector(".change-color ");
iconLoop.onclick = function() {
    changeColor.classList.toggle("open");
    this.classList.toggle("fa-spin");
};

//change color

let colors = document.querySelectorAll(".change-color ul li");
let localGetColor = window.localStorage.getItem("change-color");
if (localGetColor != null) {
    document.documentElement.style.setProperty("--main-color", localGetColor);
    document.querySelectorAll(".change-color ul li").forEach((el) => {
        el.classList.remove("active");
        if (localGetColor === el.dataset.color) {
            el.classList.add("active");
        }
    });
}
colors.forEach((color) => {
    color.addEventListener("click", (el) => {
        colors.forEach((er) => {
            er.classList.remove("active");
        });
        el.target.classList.add("active");
        document.documentElement.style.setProperty(
            "--main-color",
            el.target.dataset.color
        );
        localStorage.setItem("change-color", el.target.dataset.color);
    });
});

//change in sesstion and active
let linkes = document.querySelectorAll(".mune .links li a");
let section = document.querySelectorAll("section");
linkes.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        linkes.forEach((el) => {
            el.classList.remove("active");
        });
        e.target.classList.add("active");
        // console.log(`#${e.target.dataset.hrefs}`);
        document.querySelectorAll("section").forEach((el) => {
            el.style.zIndex = 0;
        });
        document.querySelector(`#${e.target.dataset.hrefs}`).style.zIndex = 2;
        mune.classList.toggle("open");
    });
});
//change Background Color
let label = document.querySelectorAll("label input");
// let localBackground = localStorage.getItem("backgroundChange");
// if (localBackground != null) {
//     if (localBackground === "dark") {
//         document.body.className = localBackground;
//     } else {
//         document.body.className = localBackground;
//     }
// }
label.forEach((back) => {
    back.addEventListener("click", (e) => {
        if (e.target.value == "dark") {
            document.body.className = "dark";
            // window.localStorage.setItem("backgroundChange", e.target.value);
        } else {
            document.body.className = "";
            // window.localStorage.setItem("backgroundChange", e.target.value);
        }
    });
});

//Fill Progress
let fillSpan = document.querySelectorAll(
    ".about  .content .last-box .progress span"
);

fillSpan.forEach((span) => {
    span.style.width = span.dataset.fill;
});