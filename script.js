let pricePerTicket = 150;

function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

function selectMovie(movieName) {
    document.getElementById("selectedMovie").value = movieName;
    alert(movieName + " selected!");
}

document.getElementById("tickets").addEventListener("input", function() {
    let tickets = this.value;
    let total = tickets * pricePerTicket;

    if (tickets > 0) {
        document.getElementById("totalPrice").innerText =
            "Total Price: ₹" + total;
    }
});

function confirmBooking() {
    let name = document.getElementById("name").value;
    let movie = document.getElementById("selectedMovie").value;

    if (movie === "") {
        alert("Please select a movie!");
        return false;
    }

    alert("🎟️ Booking Confirmed!\nName: " + name + "\nMovie: " + movie);
    return true;
}