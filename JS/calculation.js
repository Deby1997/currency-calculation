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
        fail.style.display = 'none';
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
    var balance = document.getElementById('balance').innerText;
    // var save = document.getElementById('saving-amount').innerText;

    var percent = parseFloat(saveInput) / 100;
    var saveAmount = parseFloat(income) * parseFloat(percent);
    document.getElementById('saving-amount').innerText = parseFloat(saveAmount);
    // notify
    var failThree = document.getElementById('notify-fail-three');
    if (saveAmount < balance) {

        document.getElementById('remaining-balance').innerText = parseFloat(balance) - parseFloat(saveAmount);
        failThree.style.display = 'none';

    }
    else {
        failThree.style.display = 'block';

    }

    // empty input values
    document.getElementById('income').value = '';
    document.getElementById('save-input').value = '';
}
document.getElementById('save-button').addEventListener('click', function () {

    save();
});