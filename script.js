/* ==========================
   SCRIPT.JS
========================== */

/* ====== SCROLL PROGRESS ====== */
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${scrollPercent}%`;
});

/* ====== HAMBURGER MENU ====== */
const navDrawer = document.getElementById('navDrawer');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
  navDrawer.classList.toggle('open');
  if (navDrawer.classList.contains('open')) {
    menuOverlay.style.display = 'block';
  } else {
    menuOverlay.style.display = 'none';
  }
}

menuOverlay.addEventListener('click', toggleMenu);

/* ====== THEME TOGGLE ====== */
function toggleDark() {
  document.body.classList.toggle('dark-theme');
}

/* ====== PUBLICATION TOGGLE ====== */
const pubButtons = document.querySelectorAll('.pub-title');

pubButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

/* ====== IMAGE VIEWER ====== */
const imageViewer = document.getElementById('imageViewer');
const viewerImg = document.getElementById('viewerImg');
const viewerCaption = document.getElementById('viewerCaption');

function openImage(element) {
  const img = element.querySelector('img');
  const caption = element.querySelector('.pub-caption') || element.querySelector('h4');
  viewerImg.src = img.src;
  viewerCaption.textContent = caption ? caption.textContent : '';
  imageViewer.style.display = 'flex';
}

function closeImage() {
  imageViewer.style.display = 'none';
}

/* ====== BOOK QUOTE TOGGLE (for mobile tap) ====== */
const books = document.querySelectorAll('.book');
books.forEach(book => {
  book.addEventListener('click', () => {
    const quote = book.querySelector('.book-quote');
    quote.style.opacity = quote.style.opacity === '1' ? '0' : '1';
  });
});

/* ====== SMOOTH SCROLL FOR INTERNAL LINKS ====== */
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close nav menu on mobile after click
      if (navDrawer.classList.contains('open')) toggleMenu();
    }
  });
});

/* ====== OPTIONAL: VIDEO HOVER EFFECT ====== */
const videos = document.querySelectorAll('.video-card iframe');
videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.style.transform = 'scale(1.02)';
  });
  video.addEventListener('mouseleave', () => {
    video.style.transform = 'scale(1)';
  });
});

/* ====== KEYBOARD ESC TO CLOSE IMAGE VIEWER ====== */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imageViewer.style.display === 'flex') {
    closeImage();
  }
});
