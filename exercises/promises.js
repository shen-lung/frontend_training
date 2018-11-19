response = {
   '/v3/users/me': {
      name: 'Juan Perez'
   },
   '/v3/events/?user=Juan Perez': [
      {
         id: 1,
         name: 'Festivus'
      },
      {
         id: 2,
         name: 'Christmas'
      }
   ],
   '/v3/events/1': {
      name: 'Festivus'
   }
}

// function callServer(url, callback) {
//    // partial application
//    setTimeout(function() {
//       callback(response[url]);
//    }, 1000);
// }
const myPromise = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    url in response ? resolve(response[url]) : reject('Url does not exist!')
  }, 1000);
})

// callServer('/v3/users/me', function(user) {
//    console.log('response', user);
//    console.log('success');
// });
myPromise('/v3/users/me').then((data) => {
  console.log('******** Simple primises ********');
  console.log('response', data);
  console.log('success');
}).catch((err) => {
  console.log(err);
})

// callServer('/v3/users/me', function(user) {
//    console.log('response', user);
//    callServer('/v3/events/?user=' + user.name, function(events) {
//       console.log('response', events);  
//       callServer('/v3/events/' + events[0].id, function(event) {
//          console.log('response', event);  
//       })
//    })
// });
myPromise('/v3/users/me').then((user) => {
  console.log('******** Multiples primises ********');
  console.log('response', user.name);
  myPromise(`/v3/events/?user=${user.name}`).then((events) => {
    console.log('response', events);
    myPromise(`/v3/events/${events[0].id}`).then((event) => {
      console.log('response', event);
    }).catch((err) => {
      console.log(err);
    })
  }).catch((err) => {
    console.log(err);
  })
}).catch((err) => {
  console.log(err);
})
