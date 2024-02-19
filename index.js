const cards = document.querySelectorAll('.sit');
totalPriceSum = 0;
seatCountSum = 0;
seatCountSumD = 0;


for(const site of cards){
  // console.log(site);
  
  site.addEventListener("click", function(){
    
    const bgColor = site.style.backgroundColor = '#1DD100';
    const siteName = site.innerHTML;
    const economoy = "Economoy";
    
    // seatCountSum
    const seatCount = parseFloat(1);
    seatCountSum += seatCount;
    const totalC = document.getElementById('seatCount');
    totalC.innerText = seatCountSum;

    // disable button
    if(seatCountSum < 5 ){
    } else if ( seatCountSum == 4 ){
      const cards = document.querySelectorAll('.sit').disabled;
    }else{
      alert ("Beware of the black market")

    }
    

    // seatCountSumD
    const seatCountD = parseFloat(1);
    seatCountSumD -= seatCountD;
    const p = seatCountSumD;
    const seatsLeft2 = parseFloat(40) + p;
    // console.log(seatsLeft2);
    let seatsLeft1 = document.getElementById('seatsLeft');
    seatsLeft1.innerText = seatsLeft2;
    // console.log(seatsLeft1)


    
    const ticketPrice = parseFloat(550);
    totalPriceSum += ticketPrice;
    // console.log(totalPriceSum);

    const totalPrice = document.getElementById('totalPrice');
    totalPrice.innerText = totalPriceSum;
    const grandTotal = document.getElementById('grandTotal');
    grandTotal.innerText = totalPriceSum;
    // console.log(totalPrice)
    


    // Select Your Seat
    const titleContainerC = document.getElementById('container');
    // console.log(container)
    const sitName = document.createElement("p");
    sitName.innerText = siteName;
    titleContainerC.appendChild(sitName)
    // console.log(sitName);
    
    const Class = document.createElement("p");
    Class.innerText = economoy;
    titleContainerC.appendChild(Class)
    // console.log(Class);

    const Price = document.createElement("p");
    Price.innerText = ticketPrice;
    titleContainerC.appendChild(Price)
    // console.log(Price);



    // console.log(seatCountSum);


// next btn next btn next btn next btn next btn next btn next btn next btn next btn
    const next = document.getElementById("next").disabled;
    if(seatCountSum > 0){
      const next = document.getElementById("next");
      next.addEventListener("click", function(){
        const popup = document.getElementById("popup")
        // console.log(popup);
        const display = document.getElementById("display")
        display.appendChild(popup)
        // console.log(display);
      })
    }





    // applyBTN applyBTN applyBTN applyBTN applyBTN applyBTN applyBTN

    const btnLast = document.getElementById("applyBTN")
    if(seatCountSum>3){
      // console.log(btnLast)
      btnLast.addEventListener("click", function(){
        // console.log("btnLast")
        const couponCode = document.getElementById("inputF").value;
        if(couponCode === "NEW15"){
          grandTotal.innerText = totalPriceSum * parseFloat(.85);
          // Update
          const inputD = document.getElementById("remove")
          const inputD1 = document.getElementById("disable")
          inputD1.appendChild(inputD)
          
          
          // console.log(inputD1)
        } else if(couponCode === "Couple 20"){
          grandTotal.innerText = totalPriceSum * parseFloat(.80);
          
          // Update
          const inputD = document.getElementById("remove")
          const inputD1 = document.getElementById("disable")
          inputD1.appendChild(inputD)
        }else{
          // Update
          alert("Invalid couponCode")
        }
      })
    }


  })
}
