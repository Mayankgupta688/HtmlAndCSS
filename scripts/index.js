function changeColor(color) {
    document.getElementById("salutation").style.color = color;
}

setTimeout(function() {
    changeColor("green")
}, 5000)

setTimeout(function() {
    changeColor("red")
}, 10000)

setTimeout(function() {
    changeColor("blue")
}, 15000)

function hideImage() {
    alert("This is to Hide Image...");
    document.getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByTagName("img")[1].style.display = "none"
    document.getElementsByTagName("img")[2].style.display = "none"
    document.getElementsByTagName("img")[3].style.display = "none"
}

function hideEmployee() {
    document.getElementsByClassName("emp_container")[1].style.display = "none"
    document.getElementsByClassName("emp_container")[2].style.display = "none"
    document.getElementsByClassName("emp_container")[3].style.display = "none"
    document.getElementsByClassName("emp_container")[0].style.display = "none"
}

function showEmployee() {
    document.getElementsByClassName("emp_container")[1].style.display = "block";
    document.getElementsByClassName("emp_container")[2].style.display = "block";
    document.getElementsByClassName("emp_container")[3].style.display = "block";
    document.getElementsByClassName("emp_container")[0].style.display = "block";
}