



self.addEventListener('fetch', event => {


    if(event.request.url.includes('.jpg') ){
        console.log(event.request.url);

        //let fotoReq = fetch('img/main.jpg');
        //let fotoReq = fetch(event.request.url);
        let fotoReq = fetch(event.request);

        event.respondWith( fotoReq);
    }
 

    
});