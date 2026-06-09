document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach((item) => item.classList.remove('active'));
  });
});

const year = new Date().getFullYear();
console.log('Portfolio ready for Sanath Shetty —', year);
