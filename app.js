// Ópticas Plaza — Controlador de visibilidad de botón flotante móvil (Vanilla JS, Zero-Deps)
// El botón sticky solo aparece cuando NO hay otro botón o sección de conversión visible en pantalla.
(() => {
  const stickyCta = document.querySelector('.mobile-sticky-cta');
  if (!stickyCta) return;

  // Se observan las secciones y botones de conversión:
  // - .hero: contiene el CTA del header y el botón principal del inicio.
  // - .services-copy .button-dark: botón de acción dentro de la sección de servicios.
  // - .final-cta: sección final de llamado a la acción con botón dedicado.
  const targetElements = Array.from(document.querySelectorAll(
    '.hero, .services-copy .button-dark, .final-cta'
  ));

  if (!('IntersectionObserver' in window) || targetElements.length === 0) {
    return;
  }

  const visibleElements = new Set();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleElements.add(entry.target);
      } else {
        visibleElements.delete(entry.target);
      }
    });

    if (visibleElements.size === 0) {
      stickyCta.classList.add('is-visible');
    } else {
      stickyCta.classList.remove('is-visible');
    }
  }, {
    threshold: 0.05
  });

  targetElements.forEach((el) => observer.observe(el));
})();
