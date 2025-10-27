const canvas = document.querySelector('.stars-section canvas');
const context = canvas.getContext('2d');

function resize() {
  const section = canvas.parentElement;
  const scale = window.devicePixelRatio || 1;
  width = section.clientWidth * scale;
  height = section.clientHeight * scale;
  canvas.width = width;
  canvas.height = height;
  stars.forEach(placeStar);
}
