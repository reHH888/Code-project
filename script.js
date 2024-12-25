const signInButton = document.querySelector("#sign-in-btn");
const signUpButton = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpButton.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const threshold = 300;
  if (scrollPosition > threshold) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const modal = document.querySelector('#myModal');
const openModalButton = document.querySelector('#myBtn');
const closeModalButton = document.querySelector('.close');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const navbar = $0.closest('nav');
if (navbar) {
  const computedStyles = window.getComputedStyle(navbar);
  const navbarData = {
    tagName: navbar.tagName,
    styles: {
      display: computedStyles.display,
      flexDirection: computedStyles.flexDirection,
      justifyContent: computedStyles.justifyContent,
      alignItems: computedStyles.alignItems,
      position: computedStyles.position,
      width: computedStyles.width,
      height: computedStyles.height,
    },
    children: Array.from(navbar.children).map(child => ({
      tagName: child.tagName,
      className: child.className,
    })),
  };
  console.log(navbarData);
}
// Function to add transition classes on scroll
const elements = document.querySelectorAll('.fade-in, .slide-in, .scale-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const classList = entry.target.classList;
      if (classList.contains('fade-in')) {
        classList.add('fade-in-animation');
      } else if (classList.contains('slide-in')) {
        classList.add('slide-in-animation');
      } else if (classList.contains('scale-up')) {
        classList.add('scale-up-animation');
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

elements.forEach(element => {
  observer.observe(element);
});

let timeout;
window.addEventListener('scroll', function() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const scrollPosition = window.scrollY;
    const threshold = 300;
    if (scrollPosition > threshold) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
    // Add transition classes on scroll
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const classList = element.classList;
        if (classList.contains('fade-in')) {
          classList.add('fade-in-animation');
        } else if (classList.contains('slide-in')) {
          classList.add('slide-in-animation');
        } else if (classList.contains('scale-up')) {
          classList.add('scale-up-animation');
        }
      }
    });
  }, 100); // Adjust the delay as needed
});