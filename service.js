document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('gname').value.trim();
    const email = document.getElementById('gmail').value.trim();
    const mobile = document.getElementById('cname').value.trim();
    const service = document.getElementById('cage').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !mobile || !service || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const mailtoLink = `mailto:aarestorationsa@gmail.com`
      + `?subject=${encodeURIComponent('Appointment Request - ' + service)}`
      + `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nService Type: ${service}\n\nMessage:\n${message}`
      )}`;

    window.location.href = mailtoLink;
  });
});