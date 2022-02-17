
function sum() {
    var income = document.getElementById('income').value;
    var food = document.getElementById('food').value;
    var rent = document.getElementById('rent').value;
    var clothes = document.getElementById('clothes').value;
    var total = parseInt(food) + parseInt(rent) + parseInt(clothes);
    document.getElementById('total-expenses').innerText = total;
    document.getElementById('balance').innerText = parseInt(income) - total;

}

document.getElementById('calculate-button').addEventListener('click', function () {

    sum();
});