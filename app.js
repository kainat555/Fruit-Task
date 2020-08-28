let currentAmount = document.querySelector("#currentAmount");
let userAmount = prompt("Enter your Budget in Rupees");
currentAmount.value = "Your current amount is " + "Rs. " + userAmount;


let a = 0;
function increaseValue1() {
    a++;
    let add1 = document.getElementById("val1");
       
        if (a <= 9) {
            add1.innerHTML = " 0" + a;
        }
        else {
            add1.innerHTML = a;
        }
console.log(add1.innerHTML)
        //not working
        // if(add1.innerText === 00){
        //   document.getElementById("decreaseBtn1").disabled = true;
        // }
    }

    let b = 0;
    function increaseValue2() {
        b++;
        let add2 = document.getElementById("val2");
        if(b <= 9){
            add2.innerHTML = " 0" + b;
        }
        else{
            add2.innerHTML = b;
        }
    } 
    let c = 0;
    function increaseValue3() {
        c++;
        let add3 = document.getElementById("val3");
        if(c <= 9){
            add3.innerHTML = " 0" + c;
        }
        else{
            add3.innerHTML = c;
        }
    }
    let d = 0
    function increaseValue4() {
        d++;
        
        let add4 = document.getElementById("val4");
        
        if(d <= 9){
            add4.innerHTML = " 0" + d;
        }
        else{
            add4.innerHTML = d;
        }
    }

    let e = 0;
    function increaseValue5(){
        e++;
        let add5 = document.getElementById("val5");
        if(e <= 9){
            add5.innerHTML = " 0" + e;
        }
        else{
            add5.innerHTMl = e;
        }
    }

function decreaseValue1() {
    a--;
    let sub1 = document.getElementById("val1");
    if (a <= 9) {
        sub1.innerHTML = " 0" + a;
    }
    else {
        sub1.innerHTML = a;
    }
}
function decreaseValue2(){
    b--;
    let sub2 = document.getElementById("val2");
    if(b <= 9){
        sub2.innerHTML = " 0" + b;
    }
    else{
        sub2.innerHTML = b;
    }
}
function decreaseValue3(){
    c--;
    let sub3 = document.getElementById("val3");
    if(c <= 9){
        sub3.innerHTML = " 0" + c;
    }
    else{
        sub3.innerHTML = c;
    }
}
function decreaseValue4(){
    d--;
    let sub4 = document.getElementById("val4");
    if(d <= 9){
        sub4.innerHTML = " 0" + d;
    }
    else{
        sub4.innerHTML = d;
    }
}
function decreaseValue5(){
    e--;
    let sub5 = document.getElementById("val5");
    if(e <= 9){
        sub5.innerHTML = " 0" + e;
    }
    else{
        sub5.innerHTML = e;
    }
}

function showValue() {
    let showValue = document.getElementById("showValue");
    let createInput = document.createElement("input");
    let applePrice = val1.innerHTML * 30;
    let bananaPrice = val2.innerHTML * 10;
    let mangoPrice = val3.innerHTML * 25;
    let papayaPrice = val4.innerHTML * 40;
    let strawberryPrice = val5.innerHTML * 10;
    let billAmount = Number(applePrice + bananaPrice + mangoPrice + papayaPrice + strawberryPrice);
    createInput.value = `Your bill amount is : Rs. ${billAmount}`;
    showValue.appendChild(createInput);
    console.log(showValue);
    
    let remainingAmount = document.getElementById("remainingAmount");
    remainingAmount.value =  "Your remaining amount is : Rs. " + (userAmount - billAmount);
}

let name = document.getElementById("name");
   let user = document.getElementById("signIn").innerText;
  console.log(name)
   console.log(user)