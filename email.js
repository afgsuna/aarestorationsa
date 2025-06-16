const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('gname').value;
  const email = document.getElementById('gmail').value;
  const mobile = document.getElementById('cname').value;
  const service = document.getElementById('cage').value;
  const message = document.getElementById('message').value;

  const mailtoLink = `mailto:aarestorationsa@gmail.com`
    + `?subject=${encodeURIComponent('New Appointment Request')}`
    + `&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nService Type: ${service}\nMessage: ${message}`
    )}`;

  window.location.href = mailtoLink;
});