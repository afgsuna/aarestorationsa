document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const mailtoLink = `mailto:aarestorationsa@gmail.com`
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

    window.location.href = mailtoLink;
  });
});
