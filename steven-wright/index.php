<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Steven Wright Aphorisms</title>
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="manifest" href="site.webmanifest">
<link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
<meta name="apple-mobile-web-app-title" content="Steven Wright Aphorisms">
<meta name="application-name" content="Steven Wright Aphorisms">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
<meta name="keywords" content="Steven Wright, surreal humor, one-liners, deadpan, wit/word play, observational comedy, Musical comedy, Anti-humor">
<meta name="description" content="Refresh the page for a new one liner.">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div id="page"><div id="content">
<blockquote class="fadeInUp"></blockquote>
</div></div>
<script>
	const data = <?php include('data/steven-wright.json'); ?>;
	let i = Math.floor(Math.random() * (data.quotes.length));
	let b = document.getElementsByTagName("blockquote")[0];
	b.innerHTML = data.quotes[i].quote.replace(/A\:/, '<br>A:');
	if (data.quotes[i].author) {
		let c = document.createElement("cite");
		c.innerHTML = '&mdash;&nbsp;' + data.quotes[i].author;
		b.appendChild(c);
	}
</script>
</body>
</html>
