function main() {
  const span = document.getElementById('server-msg');
  fetch('/api/message')
    .then(response => response.text())
    .then(text => {
      span.innerText = text;
    });
}

main();
