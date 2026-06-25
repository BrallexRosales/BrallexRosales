document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('actionButton');
  const message = document.getElementById('message');

  button.addEventListener('click', () => {
    message.textContent = 'Hello from script.js! Your project is ready.';
  });
});
