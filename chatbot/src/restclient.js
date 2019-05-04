function post(url = '', data) {
  const messageobj = JSON.stringify({ message: data, user: 'Isha' });
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: messageobj
  })
    .then(checkStatus)
    .then(console.log('Successfully sent:' + data))
    .catch(() => console.log('Can’t access ' + url + '. Blocked by browser?'));
}

async function get(url, cb) {
  const response = await fetch(url, {
    method: 'GET',
    accept: 'application/json'
  });
  const response_1 = await checkStatus(response);
  const callback = await parseJSON(response_1);
  return cb(callback);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const restclient = { post, get };
export default restclient;
