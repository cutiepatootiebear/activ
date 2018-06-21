var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("learn-more");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// get the Youtube iframe when modal closes
var iframe = document.getElementById("iframeYoutube");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

function closeModal() {
    modal.style.display = "none";
    // reload the iframe on close to stop video
    iframe.src = iframe.src;
}