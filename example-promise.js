function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function (err, temp) {
  if (err) {
    console.log('error', err);
  }else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    resolve(79);
    reject('City not found');
  });
}
getTempPromise('Philadelphia').then(function (temp) {
  // resolve
  console.log('promiss success', temp);
}, function (err) {
  // reject
  console.log('promiss error', err);
})
