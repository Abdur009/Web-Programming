document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.page-section');
  
  // Make home active by default
  document.querySelector('nav a[data-section="home"]').classList.add('active');
  document.getElementById('home').classList.remove('hidden');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(a => a.classList.remove('active'));
      // Add active class to clicked link
      this.classList.add('active');
      
      // Hide all sections
      sections.forEach(sec => sec.classList.add('hidden'));
      
      // Show the selected section
      const targetSection = this.getAttribute('data-section');
      document.getElementById(targetSection).classList.remove('hidden');
      
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
});

function showPost(postId) {
  event.preventDefault();
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
  // Show the selected post
  document.getElementById(postId).classList.remove('hidden');
  // Update URL without reload
  history.pushState(null, null, `#${postId}`);
  // Remove active class from all nav links
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  
  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function goBack() {
  event.preventDefault();
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
  // Show home section
  document.getElementById('home').classList.remove('hidden');
  // Make home nav link active
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.querySelector('nav a[data-section="home"]').classList.add('active');
  // Update URL
  history.pushState(null, null, '#');
  
  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
  const hash = window.location.hash.substring(1);
  if (hash) {
    showPost(hash);
  } else {
    goBack();
  }
});