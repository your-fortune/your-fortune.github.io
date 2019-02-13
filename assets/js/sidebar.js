var toggle = document.getElementById('toggle');
var sidebar = document.getElementById('sidebar');
var content = document.getElementById('main-content');
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
    expandSidebar(e);
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
