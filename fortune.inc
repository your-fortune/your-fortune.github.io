<?php


function fortune($options='') {
	$cmd = '/usr/games/fortune' . (strlen($options)>0 ? ' '.$options : '');
	exec ($cmd, $lines_of_output, $error_code);
	$result = '';
	if (!$error_code) {
		foreach ($lines_of_output as $line) {
			$result .= $line."\n";
		}
	} else {
		$result = "command '$cmd' failed with exit code $error_code, 
							 see <a href=\"http://tldp.org/LDP/abs/html/exitcodes.html\">reference</a>";
	}

  $result = preg_replace('/\n\s*?--(.*)\n/',"<cite>&mdash;$1</cite>",$result);
  $result = preg_replace('/\n/',' ', $result);
  $result = preg_replace('/A\:/', "<br>A:", $result);
return $result;
}
