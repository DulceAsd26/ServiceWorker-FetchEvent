



self.addEventListener('fetch', event => {


    const resp = fetch( event.request ) 
                    .then( resp => {
                        if( resp.ok ){
                          return resp;
                        }else{
                          return fetch('img/main.jpg');
                        }

                    })

   event.respondWith(
    
        
   );
 

    
});