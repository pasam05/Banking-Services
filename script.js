let balance = 1000.0;

function showBalance() {
    document.getElementById("display").innerHTML = `<p>Current Balance: Rs:${balance.toFixed(2)}</p>`;
    hideSections();
}

function showDeposit() {
    hideSections();
    document.getElementById("deposit-section").style.display = "block";
}

function showWithdrawal() {
    hideSections();
    document.getElementById("withdrawal-section").style.display = "block";
}

function deposit() {
    let depositAmount = parseFloat(document.getElementById("deposit-amount").value);
    if (depositAmount > 0) {
        balance += depositAmount;
        document.getElementById("display").innerHTML = `<p>Deposited: Rs:${depositAmount.toFixed(2)}<br>New Balance: Rs:${balance.toFixed(2)}</p>`;
    } else {
        document.getElementById("display").innerHTML = "<p>Invalid deposit amount!</p>";
    }
    document.getElementById("deposit-amount").value = "";
    hideSections();
}

function withdraw() {
    let withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        document.getElementById("display").innerHTML = `<p>Withdrawn: Rs:${withdrawAmount.toFixed(2)}<br>New Balance: Rs:${balance.toFixed(2)}</p>`;
    } else if (withdrawAmount > balance) {
        document.getElementById("display").innerHTML = "<p>Insufficient funds!</p>";
    } else {
        document.getElementById("display").innerHTML = "<p>Invalid withdrawal amount!</p>";
    }
    document.getElementById("withdraw-amount").value = "";
    hideSections();
}

function exitATM() {
    document.getElementById("display").innerHTML = "<p>Thank you for using the ATM Serive.</p>";
    hideSections();
}

function backToMenu() {
    hideSections();
    document.getElementById("display").innerHTML = "<p>Hey...! User .WelcomeBack</p>";
}

function hideSections() {
    document.getElementById("deposit-section").style.display = "none";
    document.getElementById("withdrawal-section").style.display = "none";
}
