// for total balance
function sum() {
    var income = document.getElementById('income').value;
    var food = document.getElementById('food').value;
    var rent = document.getElementById('rent').value;
    var clothes = document.getElementById('clothes').value;
    var total = parseInt(food) + parseInt(rent) + parseInt(clothes);


    var fail = document.getElementById('notify-fail');
    var failSecond = document.getElementById('notify-fail-two');

    if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        failSecond.style.display = 'block';
    }
    else if (income > total) {
        document.getElementById('total-expenses').innerText = parseInt(total);
        document.getElementById('balance').innerText = parseInt(income) - parseInt(total);
        failSecond.style.display = 'none';
        fail.style.display = 'none';
    }

    else {
        fail.style.display = 'block';
    }
    // empty input values
    document.getElementById('food').value = '';
    document.getElementById('rent').value = '';
    document.getElementById('clothes').value = '';
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
    // empty input values
    document.getElementById('income').value = '';
    document.getElementById('save-input').value = '';
}
document.getElementById('save-button').addEventListener('click', function () {

    save();
});