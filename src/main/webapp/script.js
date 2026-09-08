// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for contacting us! We will get back to you as as soon as possible.we will let you know');
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill out all fields.');
  }
});
