function updateProductNumber(product, price, isIncresing) {
    const countInput = document.getElementById('count-' + product);
    let countInputValue = countInput.value;
    if (isIncresing) {
        countInputValue = parseInt(countInputValue) + 1;

    }
    else if (countInputValue > 0) {
        countInputValue = countInputValue - 1;

    }
    countInput.value = countInputValue;


    const balanceProduct = document.getElementById('balance-' + product);
    balanceProduct.innerText = countInputValue * price;

    CalculateTotalPrice();
}

function getInputValue(product){
    const productInput = document.getElementById('count-' + product);
    const productInputValue = parseInt(productInput.value);
    return productInputValue;
}


function CalculateTotalPrice(){
   const phoneTotal = getInputValue('Mobile') * 1219;
   const CaseTotal = getInputValue('Case') * 59;
   const SubTotal = phoneTotal + CaseTotal;
   const tax = SubTotal /10;
   const total = SubTotal+tax;

   //update on html
   document.getElementById('sub-total').innerText =SubTotal;
   document.getElementById('tax').innerText = tax;
   document.getElementById('total').innerText = total;


}



//handle phone increese decrese event
document.getElementById('plusBtnMobile').addEventListener('click', function () {
    updateProductNumber('Mobile', 1219, true);
})
document.getElementById('minusBtnMobile').addEventListener('click', function () {
    updateProductNumber('Mobile', 1219, false);
})


//handle case increese decrese event
document.getElementById('plusBtnCase').addEventListener('click', function () {
    updateProductNumber('Case', 59, true);
})
document.getElementById('minusBtnCase').addEventListener('click', function () {
    updateProductNumber('Case', 59, false);
})

