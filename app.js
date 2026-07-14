const honTimeUrl = 'https://api.veform.co/veform-api/hon';


function honTime(name, id) {
  const xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open('POST', honTimeUrl, true);
  xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
  xmlHttpRequest.send(JSON.stringify({ name: name, id: id }));
}

let uuid = localStorage.getItem('tempid');
if (!uuid) {
  uuid = crypto.randomUUID();
  localStorage.setItem('tempid', uuid);
}
