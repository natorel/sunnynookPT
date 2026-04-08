// Mobile nav toggle
function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}

// FAQ accordion
function toggleFAQ(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('visible');

  // Close all
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('visible'));
  document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));

  // Open clicked (unless it was already open)
  if (!isOpen) {
    answer.classList.add('visible');
    btn.classList.add('open');
  }
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});
