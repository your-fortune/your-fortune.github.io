var toggle = document.getElementById('toggle');
var sidebar = document.getElementById('sidebar');
var content = document.getElementById('main-content');
var hidden = document.querySelectorAll('.ui-delay-load');
if (hidden.length) {
  setTimeout(function () {
    for (var i = hidden.length - 1; i >= 0; i--) {
      hidden[i].classList.remove('ui-delay-load');
    }
  }, 1200);
}

var collapseSidebar = function (e) {
  if (sidebar.getAttribute('aria-expanded') !== 'false') {
    sidebar.setAttribute('aria-expanded', 'false');
    announceText('sidebar collapsed');
  }
}
var expandSidebar = function (e) {
  if (sidebar.getAttribute('aria-expanded') !== 'true') {
    sidebar.setAttribute('aria-expanded', 'true');
    announceText('sidebar expanded');
  }
}
var toggleSidebar = function (e) {
  if (sidebar.getAttribute('aria-expanded') === 'true') {
    collapseSidebar(e);
  }
  else {
    sidebar.querySelector('nav li:first-child > a').focus();
  }
}

var announceText = function (str) {
  console.debug(str);
  document.getElementById('announce').innerHTML = str;
}

toggle.addEventListener('click', toggleSidebar, false);
sidebar.addEventListener('focusin', expandSidebar, false);
sidebar.addEventListener('touchend', expandSidebar, false);
sidebar.addEventListener('focusout', collapseSidebar, false);
content.addEventListener('focusin', collapseSidebar, false);
content.addEventListener('touchend', collapseSidebar, false);
