function transform(degree){
   const celsiusExists = degree.toUpperCase().includes('C')
   const fahrenheitExists = degree.toUpperCase().includes('F')

   if(!celsiusExists && !fahrenheitExists){
       throw new Error('Grau não encontrado')
   }

   let updateDegree = Number(degree.toUpperCase().replace('F',''));
   let formula = fahrenheit => (fahrenheit - 32) * 5/9;
   let degreeSign = '°C';

   if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace('C',''));
        formula = celsius => celsius * (9/5) + 32;
        degreeSign = '°F';
   }
   return formula(updateDegree) + degreeSign;
}
try{
    console.log(transform('10c'))
    console.log(transform('50f'))
    transform('20e')
}catch(e){
    console.log(e.message) 
}