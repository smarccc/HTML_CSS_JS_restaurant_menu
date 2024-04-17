function updateTotalPrice() {
    var checkboxes = document.getElementsByName('checkbox');
    var quantities = document.getElementsByName('quantity');
    var totalPrice = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            var price = parseInt(checkboxes[i].value);
            var quantity = parseInt(quantities[i].value);
            totalPrice += price * quantity;
        }
    }
    document.getElementById('totalPrice').textContent = totalPrice;
}

// Event listeners to update total price when checkboxes or quantities are changed
var checkboxes = document.getElementsByName('checkbox');
var quantities = document.getElementsByName('quantity');
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', updateTotalPrice);
    quantities[i].addEventListener('input', updateTotalPrice);
}