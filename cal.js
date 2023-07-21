for (;;) {
    var firstNum = void 0;
    var secondNum = void 0;
    var note1 = "You have Entered an invalid number.\n\nTo proceed further you must have to Enter a valid Number";
    var note2 = "You have Entered an invalid operator.\n\nTo proceed further you must have to Enter a valid operator";
    for (;;) {
        var firstNumber = prompt("Enter first Number");
        firstNum = Number(firstNumber);
        if (firstNum < 0 || firstNum > 0 || firstNum == 0) {
            break;
        }
        else {
            alert(note1);
        }
    }
    var operator = "Enter any operator out of operators given below\n\n1) + for addition\n2) - for subtraction\n3) * for multiplication\n4) / for division\n5) % for modulus\n6) ** for exponentiation ";
    for (;;) {
        var anyoperator = prompt(operator);
        if (anyoperator == "+" || anyoperator == "-" || anyoperator == "*" || anyoperator == "/" || anyoperator == "%" || anyoperator == "**") {
            for (;;) {
                var secondNumber = prompt("Enter Second Number");
                secondNum = Number(secondNumber);
                if (secondNum < 0 || secondNum > 0 || secondNum == 0) {
                    break;
                }
                else {
                    alert(note1);
                }
            }
            if (anyoperator == "+") {
                console.log(firstNum + secondNum);
                alert(firstNum + secondNum);
            }
            else if (anyoperator == "-") {
                console.log(firstNum - secondNum);
                alert(firstNum - secondNum);
            }
            else if (anyoperator == "*") {
                console.log(firstNum * secondNum);
                alert(firstNum * secondNum);
            }
            else if (anyoperator == "/") {
                console.log(firstNum / secondNum);
                alert(firstNum / secondNum);
            }
            else if (anyoperator == "%") {
                console.log(firstNum % secondNum);
                alert(firstNum % secondNum);
            }
            else if (anyoperator == "**") {
                console.log(Math.pow(firstNum, secondNum));
                alert(Math.pow(firstNum, secondNum));
            }
            break;
        }
        else {
            alert(note2);
        }
    }
    var note3 = " Press 'E' to Exit.\n\nPress anyother alphabet if you want to carry on.\n";
    var calAgain = prompt(note3);
    if (calAgain == 'E' || calAgain == 'e') {
        break;
    }
}
