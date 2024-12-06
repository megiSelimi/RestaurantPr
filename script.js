function scrollToCategory(id) {
  const element = document.getElementById(id);
  const rightPart = document.querySelector('.right-part');

  if (element && rightPart) {
      // Get the position of the category relative to the .right-part container
      const offsetTop = element.offsetTop - rightPart.offsetTop;

      // Scroll the right-part container to align the category to the top
      rightPart.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
  }

  // Optional: Highlight the active button
  document.querySelectorAll('.btn-category').forEach(btn => btn.classList.remove('active'));
  // Update the active class on the button that was clicked
  document.querySelector(`[onclick="scrollToCategory('${id}')"]`).classList.add('active');
}
