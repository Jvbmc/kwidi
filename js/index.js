function toggleTheme() {
  // Alterna a classe 'dark-theme' no elemento body
  document.body.classList.toggle('dark-theme');

  // Salva a preferência do tema no localStorage
  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Carrega a preferência do tema ao iniciar a página
window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
};