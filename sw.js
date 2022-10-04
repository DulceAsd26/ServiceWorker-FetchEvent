



self.addEventListener('fetch', event => {

    if( event.request.url.includes('style.css') ){
        event.respondWith( null );
    }else{
        event.respondWith( fetch( event.request ) );
    }

 

    
});