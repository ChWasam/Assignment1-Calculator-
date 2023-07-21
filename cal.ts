for (; ;) {

let firstNum;
let secondNum;
let note1 = `You have Entered an invalid number.

To proceed further you must have to Enter a valid Number`;

let note2 = `You have Entered an invalid operator.

To proceed further you must have to Enter a valid operator`;


for ( ; ;) {
    let firstNumber =prompt("Enter first Number");
    firstNum = Number(firstNumber);

    if (firstNum < 0 || firstNum > 0 || firstNum ==0 ) { 
        break;
    }
     else{
         alert(note1);
     }
    }



let operator = `Enter any operator out of operators given below

1) + for addition
2) - for subtraction
3) * for multiplication
4) / for division
5) % for modulus
6) ** for exponentiation `;

for ( ; ;) {
let anyoperator = prompt(operator);

if (anyoperator == "+" || anyoperator == "-"  || anyoperator == "*"  || anyoperator == "/" || anyoperator == "%" || anyoperator == "**" ){



    
for( ; ;){
let secondNumber =prompt("Enter Second Number");
secondNum = Number(secondNumber);
if (secondNum < 0 || secondNum > 0 || secondNum ==0 ) { 
    break;
}
 else{
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
                    console.log(firstNum ** secondNum);
                    alert(firstNum ** secondNum);
                    }
                break;
                }
        else {alert(note2);
            }
            
            }
let note3 = ` Press 'E' to Exit.

Press anyother alphabet if you want to carry on.
`;
            let calAgain = prompt(note3);

         if (calAgain == 'E' || calAgain == 'e' ) {
            break;
         }
        }