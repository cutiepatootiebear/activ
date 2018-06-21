var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("learn-more");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span = modal.style.display = "none";

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function () {

})

function changeVideo(vId) {
    var iframe = document.getElementById("iframeYoutube");
    iframe.src = "https://www.youtube.com/embed/qVW6lOQziYM"

    $("#myModal").modal("show");
}