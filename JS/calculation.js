// for total balance
function sum() {
    var income = document.getElementById('income').value;
    var food = document.getElementById('food').value;
    var rent = document.getElementById('rent').value;
    var clothes = document.getElementById('clothes').value;
    var total = parseInt(food) + parseInt(rent) + parseInt(clothes);
    document.getElementById('total-expenses').innerText = parseInt(total);
    document.getElementById('balance').innerText = parseInt(income) - parseInt(total);

}

document.getElementById('calculate-button').addEventListener('click', function () {

    sum();
});
// for savings
function save() {
    var income = document.getElementById('income').value;
    var saveInput = document.getElementById('save-input').value;
    var percent = parseFloat(saveInput) / 100;
    var saveAmount = parseFloat(income) * parseFloat(percent);
    document.getElementById('saving-amount').innerText = parseFloat(saveAmount);
    var balance = document.getElementById('balance').innerText;
    var save = document.getElementById('saving-amount').innerText;
    document.getElementById('remaining-balance').innerText = parseFloat(balance) - parseFloat(save);
}
document.getElementById('save-button').addEventListener('click', function () {

    save();
});