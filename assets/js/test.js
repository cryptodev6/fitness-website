const videoCards = document.querySelectorAll('.video-card');
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.close');

// Abrir modal con el video seleccionado
videoCards.forEach(card => {
  card.addEventListener('click', () => {
    const src = card.getAttribute('data-video');
    modalVideo.setAttribute('src', src);
    modal.style.display = 'block';
  });
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalVideo.setAttribute('src', ''); // detener video
});

// Cerrar al hacer clic fuera
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalVideo.setAttribute('src', '');
  }
});


