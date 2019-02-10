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

var i = Math.floor(Math.random() * (data.quotes.length));
var b = document.getElementsByTagName("blockquote")[0];
var q = data.quotes[i].quote;

b.innerHTML = q.toHtml().toParagraph();
if (data.quotes[i].author) {
  var c = document.createElement("cite");
  c.innerHTML = '–&nbsp;' + data.quotes[i].author.toHtml();
  b.appendChild(c);
}
