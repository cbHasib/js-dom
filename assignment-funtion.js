const diesel = document.getElementById('disel').value;
const petrol = document.getElementById('petrol').value;
const octane = document.getElementById('octane').value;


document.getElementById('submit').addEventListener('click', function (diesel, petrol, octane) {
        if (
          typeof diesel === "number" &&
          diesel >= 0 &&
          typeof petrol === "number" &&
          petrol >= 0 &&
          typeof octane === "number" &&
          octane >= 0
        ) {
          const totalDieselPrice = diesel * 114;
          const totalPetrolPrice = petrol * 130;
          const totalOctanePrice = octane * 135;


          const totalOilPrice =
            totalDieselPrice + totalPetrolPrice + totalOctanePrice;

console.log(result);

            document.getElementById('num').innerText = totalOilPrice;   
        //   return totalOilPrice;
        } else {
          return "Please Enter Valid Number as value";
        }
      });



   