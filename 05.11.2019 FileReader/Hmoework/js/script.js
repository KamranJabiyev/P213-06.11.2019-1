let numbers = document.querySelectorAll(".number");
let areas = document.querySelectorAll(".drop_area");

numbers.forEach(number => {
    number.ondragstart = function(e) {
        e.dataTransfer.setData("text", this.id)
    }
})

areas.forEach(area => {
    area.ondragover = e => e.preventDefault();
})

areas.forEach(area => {
    area.ondrop = function(e) {
        let id = e.dataTransfer.getData("text");
        let elm = document.getElementById(id);

        let num = Number(elm.getAttribute("data-num"));
        let min = Number(e.target.getAttribute("data-min"));
        let max = Number(e.target.getAttribute("data-max"));

        if (num >= min && num <= max) {
            this.appendChild(elm);
        }
    }
})