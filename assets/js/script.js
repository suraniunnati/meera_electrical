
lucide.createIcons();

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;
mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.innerHTML = isMenuOpen ? '<i data-lucide="x" class="w-6 h-6"></i>' : '<i data-lucide="menu" class="w-6 h-6"></i>';
    lucide.createIcons();
});
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); isMenuOpen = false; mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>'; lucide.createIcons(); });
});

// header
const header = document.getElementById('header');
window.addEventListener('scroll', () => { header.classList.toggle('header-scrolled', window.scrollY > 50); });

const counters = document.querySelectorAll('.counter-value');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { animateCounter(entry.target, parseInt(entry.target.dataset.target)); counterObserver.unobserve(entry.target); } });
}, { threshold: 0.5 });
counters.forEach(counter => counterObserver.observe(counter));
function animateCounter(el, target) {
    let current = 0; const increment = target / 60;
    const timer = setInterval(() => { current += increment; if (current >= target) { el.textContent = target + (target === 98 ? '%' : '+'); clearInterval(timer); } else { el.textContent = Math.floor(current); } }, 16);
}

const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); }, { threshold: 0.1, rootMargin: '-50px' });
fadeElements.forEach(el => fadeObserver.observe(el));

const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.innerHTML = 'Sending...'; btn.disabled = true;
    await new Promise(r => setTimeout(r, 1000));
    toast.textContent = "Message sent successfully!"; toast.className = 'toast success show';
    setTimeout(() => toast.classList.remove('show'), 3000);
    contactForm.reset(); btn.innerHTML = 'Send Message <i data-lucide="send" class="w-5 h-5"></i>'; btn.disabled = false; lucide.createIcons();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) { e.preventDefault(); document.querySelector(this.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }); });
});


// about-page
//   JavaScript Animation

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".scroll-animate").forEach(el => {
      observer.observe(el);
    });