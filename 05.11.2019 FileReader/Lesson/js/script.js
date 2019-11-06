let download = document.querySelector(".download");
let table = document.querySelector(".table");
let area = document.querySelector(".item");

document.getElementById("remove").onclick = function() {
    table.lastElementChild.innerHTML = "";
    table.classList.remove("show");
    this.classList.remove("show");
}

download.onclick = function() {
    this.nextElementSibling.click();
}

download.nextElementSibling.onchange = function(e) {
    // console.log(e.target.files)
    uploadImg(e.target.files)
}

area.ondragover = function(e) {
    e.preventDefault();
}

area.ondrop = function(e) {
    e.preventDefault();
    // console.log(e.dataTransfer.files)
    uploadImg(e.dataTransfer.files)

}

function uploadImg(files) {
    for (let file of files) {
        const reader = new FileReader();
        reader.onloadend = function(event) {
            let tr = document.createElement("tr");
            let tdImg = document.createElement("td");

            let img = document.createElement("img");
            img.setAttribute("src", event.target.result);

            let tdName = document.createElement("td");
            let tdSize = document.createElement("td");
            tdName.innerText = file.name;
            tdSize.innerText = file.size;

            tdImg.appendChild(img);


            tr.appendChild(tdImg);
            tr.appendChild(tdName);
            tr.appendChild(tdSize);

            table.lastElementChild.appendChild(tr);
        }
        reader.readAsDataURL(file)

    }
    table.classList.add("show");
    document.getElementById("remove").classList.add("show");
}