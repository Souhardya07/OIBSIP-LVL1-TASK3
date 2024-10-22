  const inputs = Document.querySelectorAll(".panel input");
  const C = Document.querySelectorAll("#celsius");
  const F = Document.querySelectorAll("#fahrenheit");
  const K = Document.querySelectorAll("#kelvin");


  inputs.forEach(input => {
    input.addEventListener("input", e => {

        const unit = e.target.id;

        const v = parseInt(e.target.value);
        if(unit === "celsius"){
          F.value = parseFloat((v*1.8 +32)).toFixed(4)*1;
          K.value = parseFloat((v+ 273.15)).toFixed(4)*1;
        }
        else if(unit === "fahrenheit"){
            C.value = parseFloat((v-32)*5/9).toFixed(4)*1;
            K.value = parseFloat(((v -32)*5/9)+273.15).toFixed(4)*1;
          }
         else  if(unit === "kelvin"){
            F.value = parseFloat(v - 273.15).toFixed(4)*1;
            C.value = parseFloat((v - 273.15)* 9/5 + 32).toFixed(4)*1;
          }
    })
  });