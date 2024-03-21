const form = document.getElementById('sum-form');
const result = document.getElementById('sum-result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const a = +formData.get('a');
  const b = +formData.get('b');
  result.textContent = a + b;
});
