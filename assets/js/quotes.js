'use strict';

var refresh = document.getElementById('refresh');

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
  return '<p>' + p + '</p>';
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
var getIndexFromUrlHash = function(maxVal) {
  var i = false;
  if (typeof window.location.hash.split('#')[1] !== 'undefined'
    && typeof parseInt(window.location.hash.split('#')[1], 10) === 'number') {
    i = parseInt(window.location.hash.split('#')[1], 10) - 1;
    if (i >= maxVal) {
      i = false;
    }
  }
  return i;
}

var loadQuotes = function (refreshFrom) {
  console.log(typeof quoteSources);
  console.log(quoteSources);
  if (typeof quoteSources != 'object' || !quoteSources.length > 0) {
    console.error('the quoteSources Javascript constant must be defined as a non-empty array literal before calling quotes.js');
  }
  // If there are multiple quoteSources, load from a randomly selected source.
  var seed = getRandomSeed(null, quoteSources.length);
  loadJSON(quoteSources[seed], function(error, data) {
    if (error) {
      console.error(error);
    } else {
      loadQuote(seed, data, refreshFrom);
    }
  });
}

var loadQuote = function (selectedSource, quotes, refreshFrom) {
  var i; // array index
  var k = quotes.data.length;
  var j = getIndexFromUrlHash(k);
  if (j === false || refreshFrom === RANDOM_SEED) {
    i = getRandomSeed(j, k);
  }
  else {
    i = j;
  }

  var b = document.getElementsByTagName("blockquote")[0];
  var q = quotes.data[i].quote;

  b.innerHTML = q.toHtml().toParagraph();
  if (quotes.data[i].author) {
    var c = document.createElement("cite");
    c.innerHTML = '–&nbsp;' + quotes.data[i].author.toHtml();
    b.appendChild(c);

    announceText( q + '. Quotation by ' + quotes.data[i].author);
  }
  else {
    announceText(q);
  }

  // Replace the HTML node to trigger CSS animations.
  var bb = b.cloneNode(true);
  b.parentNode.replaceChild(bb, b);

  if (selectedSource > 1) {
    k = 'many';
  }

  var x = i+1;
  var z = document.getElementsByClassName("count");
  var t = updatePageTitle(x, k);

  [].forEach.call(z, function (el) {
    el.innerHTML = x + ' of ' + k + '.';
  });

  if (history.pushState) {
    if (j === false || refreshFrom == URL_HASH) {
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

var loadJSON = function(url, callback) {
  var req = new XMLHttpRequest();

  req.addEventListener('load', onLoad);
  req.addEventListener('error', onFail);
  req.addEventListener('abort', onFail);

  req.open('GET', url);
  req.overrideMimeType('application/json');
  req.send();

  function onLoad(event) {
    if (req.status >= 400) {
      onFail(event);
    } else {
      var json = JSON.parse(this.responseText);
      callback(null, json);
    }
  }

  function onFail(event) {
    console.error(event);
    callback(new Error('JSON data could not be loaded from: ' + url));
  }
}

addEventListener('pageshow', function(e) {
  if (e) {
    // If the page was refreshed manually, load a random quote, otherwise
    // load the quote specified on the URL hash, if it exists.
    if (window.wasReloaded()) {
      loadQuotes(RANDOM_SEED);
    }
    else {
      loadQuotes(URL_HASH);
    }
  }
});
addEventListener('popstate', function(e) {
  if (e) {
    // Popstate runs when navigating with browser's back and forward buttons,
    // and therefore load the quote from the URL hash.
    loadQuotes(URL_HASH);
  }
});

refresh.addEventListener('click', function(e) {
  refresh.blur();
  refresh.querySelector('img').classList.add('is-spinning');
  setTimeout(function() {
    refresh.querySelector('img').classList.remove('is-spinning');
  }, 1200);
  loadQuotes(RANDOM_SEED);
}, false);
