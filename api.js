const cargarconsejo= async()  =>{

   try {
    const respueta = await  fetch("https://api.adviceslip.com/advice");

    console.log(respueta)
    
   const datos = await respueta.json();
   console.log(datos);
    
   document.getElementById("iden").innerHTML = `${datos.slip.id}`;
   document.getElementById("conse").innerHTML = `"${datos.slip.advice}"`;
   } catch (error) {
       console.log(error);
   }
   
}
cargarconsejo();