 function factorial() {
            let n = parseInt(document.getElementById("num").value);
            let fact = 1;

            if (isNaN(n)) {
                document.getElementById("result").innerHTML = "Please enter a number.";
                return;
            }

            if (n < 0) {
                document.getElementById("result").innerHTML = "Factorial is not defined for negative numbers.";
                return;
            }

            for (let i = 1; i <= n; i++) {
                fact = fact * i;
            }

            document.getElementById("result").innerHTML =
                "Factorial of " + n + " = " + fact;
        }