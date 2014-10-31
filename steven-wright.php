<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>
<title>Your Fortune Cookie</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link media="all" type="text/css" href="style/style.css" rel="stylesheet"/>
</head>
<body>
<div id="page">
<div id="content">
<?php include('./fortune.inc'); ?>
<pre style='font-family:monospaced'>
<?php print fortune('-s /home/jrguitar21/www/projects.elementalidad.com/fortune/data/steven-wright');?>
</pre>
</div></div>
</body>
</html>
