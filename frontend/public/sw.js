// self.addEventListener( "install", function( event ){
//   console.log( "WORKER: install event in progress." );
// });

// self.addEventListener( "activate", event => {
//   console.log('WORKER: activate event in progress.');
// });

// self.addEventListener("fetch", event => {
//   if (event.request.url.includes("/api/")) {
//     event.respondWith(customHeaderRequestFetch(event));
//     // response to API requests, Cache Update Refresh strategy
//   } else {
//     // response to static files requests, Cache-First strategy
//   }
// });

// function customHeaderRequestFetch(event) {
//   const newRequest = new Request(event.request, {
//     mode: 'cors',
//     credentials: 'omit',
//     headers: {
//       'x-my-custom-header': 'The Most Amazing Header Ever'
//     }
//   })
//   return fetch(newRequest)
// }