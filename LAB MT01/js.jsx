function CheckResult() {
    let n = document.getElementById("number").value;
    n = Number(n);
    if (n % 2 == 0) {
        alert("It is a Even Number");
    } else {
        alert("It is a Odd Number");
    }
}