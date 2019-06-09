async function post(url = '', data) {
  const messageobj = JSON.stringify({ message: data, user: 'Isha' });
  return fetch(url, {
    method: 'POST',
    body: messageobj
  })
    .then(checkStatus);
}

async function get(url) {
  const response = await fetch(url, {
    method: 'GET'
  }).then(checkStatus);
  return await parseJSON(response);
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.error(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const restclient = { post, get };
export default restclient;
