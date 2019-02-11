String.prototype.toHtml = function () {
  return this
    .replace(/`([^`]+?)`/g, '<code>$1</code>')
    .replace(/\*([^\*]+?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
};
String.prototype.toParagraph = function () {
  var p = this
    .replace(/(\n){2,}/g, '</p><p>')
    .replace(/(<br>){2,}/g, '</p><p>');
  return '<p>' + p + '</p>'
}
Window.prototype.wasReloaded = function () {
  var perfEntries = performance.getEntriesByType("navigation");
  for (var i=0; i < perfEntries.length; i++) {
    var p = perfEntries[i];
    if (p.type === 'reload') {
      return true;
    }
    else {
      return false;
    }
  }

  if (window.performance) {
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      return true;
    }
    else {
      return false;
    }
  }

  return undefined;
}
var updatePageTitle = function(x, y) {
  var t =  document.title
    .replace(/ \[(\d+) of (\d+)\]/, '')
    .replace(/ \· /, ' [' + x + ' of ' + y + '] · ')
  return t;
}

var URL_HASH = 0;
var RANDOM_SEED = 1;
var getRandomSeed = function(oldVal, maxVal) {
  var seed;
  do {
    seed = Math.floor(Math.random() * (maxVal));
  }
  while (oldVal === seed);
  return seed;
}
var loadQuote = function (quoteSource) {
  var i = false;
  var j = false;
  if (typeof window.location.hash.split('#')[1] !== 'undefined'
    && typeof parseInt(window.location.hash.split('#')[1], 10) === 'number') {
    j = parseInt(window.location.hash.split('#')[1], 10) - 1;
    if (j < quotes.data.length) {
      i = j;
    }
  }
  if (!i || (window.wasReloaded() && quoteSource === RANDOM_SEED)) {
    i = getRandomSeed(j, quotes.data.length);
  }

  var b = document.getElementsByTagName("blockquote")[0];
  var q = quotes.data[i].quote;

  b.innerHTML = q.toHtml().toParagraph();
  if (quotes.data[i].author) {
    var c = document.createElement("cite");
    c.innerHTML = '–&nbsp;' + quotes.data[i].author.toHtml();
    b.appendChild(c);
  }

  var x = i+1;
  var y = quotes.data.length;
  var z = document.getElementsByClassName("count");
  var t = updatePageTitle(x, y);

  [].forEach.call(z, function (el) {
    el.innerHTML = x + ' of ' + y + '.';
  });

  if(history.pushState) {
    if (j === false || quoteSource == URL_HASH) {
      history.replaceState(null, t, '#' + x);
    }
    else if (window.wasReloaded()) {
      history.pushState(null, t, '#' + x);
      history.replaceState(null, t, '#' + x);
    }
    else {
      history.replaceState(null, t, '#' + x);
    }
  }
  else {
    location.hash = '#' + x;
  }
  document.title = t;
}

addEventListener('pageshow', function(e) {
  if (e) {
    // Code to handle back button or prevent from navigation
    if (window.wasReloaded()) {
      loadQuote(RANDOM_SEED);
    }
    else {
      loadQuote(URL_HASH);
    }
  }
});
addEventListener('popstate', function(e) {
  if (e) {
    // Code to handle back button or prevent from navigation
    loadQuote(URL_HASH);
  }
});
