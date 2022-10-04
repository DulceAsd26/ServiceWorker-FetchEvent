
//if( 'serviceWorker' in navigator){
  //  console.log('Podemos usarlo!');
//}

//Confirmar si podemos usar SW
if( navigator.serviceWorker){
    
    navigator.serviceWorker.register('/sw.js');
}