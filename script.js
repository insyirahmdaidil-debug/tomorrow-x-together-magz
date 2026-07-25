document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that have the 'scroll-reveal' class
  const revealElements = document.querySelectorAll(".scroll-reveal");

  // Options for the Intersection Observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
  };

  // Create the observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'active' class to trigger CSS transition
        entry.target.classList.add("active");
        // Stop observing once the element has faded in
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Attach observer to each element
  revealElements.forEach(el => observer.observe(el));
});// JavaScript Document

document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const revealOnScroll = function () {
    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100; // Trigger threshold

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger once on page load
});