var toggle = document.getElementById('toggle');
var sidebar = document.getElementById('sidebar');
var collapseSidebar = function (e) {
  console.log('collapseSidebar');
  console.log(e);
  if (sidebar.getAttribute('aria-expanded') !== 'false') {
    sidebar.setAttribute('aria-expanded', 'false');
    announceText('sidebar collapsed');
  }
}
var expandSidebar = function (e) {
  console.log('expandSidebar');
  console.log(e);
  if (sidebar.getAttribute('aria-expanded') !== 'true') {
    sidebar.setAttribute('aria-expanded', 'true');
    //sidebar.focus();
    announceText('sidebar expanded');
  }
}
var toggleSidebar = function (e) {
  console.log('toggleSidebar');
  console.log(e);
  if (sidebar.getAttribute('aria-expanded') === 'true') {
    sidebar.blur();
    //collapseSidebar(e);
  }
  else {
    sidebar.focus();
    //expandSidebar(e);
  }
}


var announceText = function (str) {
  console.log(str);
  document.getElementById('announce').innerHTML = str;
}

toggle.addEventListener('click', toggleSidebar, false);
sidebar.addEventListener('focusin', expandSidebar, false);
sidebar.addEventListener('focusout', collapseSidebar, false);
