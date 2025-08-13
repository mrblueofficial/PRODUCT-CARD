// Hover image swap
document.querySelectorAll('.product-image').forEach(img => {
  const original = img.src;
  const altImage = img.getAttribute('data-alt');

  img.addEventListener('mouseenter', () => img.src = altImage);
  img.addEventListener('mouseleave', () => img.src = original);
});

// Show More button functionality
const showMoreBtn = document.getElementById('showMoreBtn');
if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
      const moreWrapper = document.querySelector('.more-wrapper');
      moreWrapper.classList.toggle('hidden');
      showMoreBtn.textContent = moreWrapper.classList.contains('hidden') ? 'Show More' : 'Show Less';
  });
}
