var toggle = document.getElementById('toggle');
var sidebar = document.getElementById('sidebar');
var collapseSidebar = function (e) {
  if (sidebar.getAttribute('aria-expanded') !== 'false') {
    sidebar.setAttribute('aria-expanded', 'false');
    announceText('sidebar collapsed');
  }
}
var expandSidebar = function (e) {
  if (sidebar.getAttribute('aria-expanded') !== 'true') {
    sidebar.setAttribute('aria-expanded', 'true');
    //sidebar.focus();
    announceText('sidebar expanded');
  }
}
var toggleSidebar = function (e) {
  if (sidebar.getAttribute('aria-expanded') === 'true') {
    sidebar.blur();
  }
  else {
    sidebar.focus();
  }
}

var announceText = function (str) {
  console.debug(str);
  document.getElementById('announce').innerHTML = str;
}

toggle.addEventListener('click', toggleSidebar, false);
sidebar.addEventListener('focusin', expandSidebar, false);
sidebar.addEventListener('focusout', collapseSidebar, false);
