// Sidebar dropdown toggles
document.querySelectorAll('.nav-group-toggle').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    var list = this.nextElementSibling;

    this.setAttribute('aria-expanded', String(!expanded));
    if (expanded) {
      list.hidden = true;
    } else {
      list.hidden = false;
    }
  });


});

// Mobile sidebar toggle
var sidebarToggle = document.getElementById('sidebar-toggle');
var sidebar = document.getElementById('sidebar');

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener('click', function() {
    var isOpen = sidebar.classList.toggle('open');
    sidebarToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(e) {
    if (
      sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      e.target !== sidebarToggle
    ) {
      sidebar.classList.remove('open');
      sidebarToggle.setAttribute('aria-expanded', 'false');
    }
  });
}