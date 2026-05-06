function generateQR(){

  const user = {
    name: document.getElementById("name").value,
    blood: document.getElementById("blood").value,
    contact: document.getElementById("contact").value,
    address: document.getElementById("address").value
  };

  const id = Date.now().toString();

  localStorage.setItem(id, JSON.stringify(user));

  const url = window.location.href.replace("register.html", "profile.html") + "?id=" + id;

  QRCode.toCanvas(document.getElementById("qr"), url);
}