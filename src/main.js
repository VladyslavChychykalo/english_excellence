const menu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('menu-open-btn');
const closeBtn = document.getElementById('menu-close-btn');
const menuNav = document.getElementById('mobile-menu-nav');

if (menu && openBtn && closeBtn) {
  const toggleMenu = isOpen => {
    menu.classList.toggle('is-open', isOpen);
    openBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const openMenu = () => toggleMenu(true);
  const closeMenu = () => toggleMenu(false);

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  menu.addEventListener('click', event => {
    if (event.target === menu) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  menuNav?.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link) {
      closeMenu();
    }
  });
}
