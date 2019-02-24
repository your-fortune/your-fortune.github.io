---
layout: normal
permalink: /about
title: About this project
description: This is a hobby project. It is open sourced on GitHub.
---

# About this project

This project began its life in 2008 as a simple PHP script wrapper
for the [Unix fortune command][1]. The script converted the pseudo-random
plain text fortune cookie message intended for display as a “quote of the day”
on the command line upon login, into rich HTML for the Web.

There were originally only two fortune configurations: one that displayed
messages from the default fortune command on the Linux server where the site
was hosted, and the second from a custom set of one-liner jokes by American
comedian Steven Wright, affectionately referred to as *aphorisms* in
[the initial blog post][2].

There were plans to make the fortunes available via RSS, however after the
initial development, the idea went ignored for years. In September of 2018,
some visual formatting enhancements were added including modern Web fonts
and CSS transition effects when the fortune loads in the browser.

In January of 2019, the project concept evolved into an entire website,
re-built with Jekyll, hosted on GitHub Pages. The application logic was
refactored and the PHP back-end replaced with a client-side JavaScript
application to load the quotes from JSON-formatted datasets.

The compilation and sourcing of additional fortune files, and the painstaking
transition from the fortune file format into JSON was manually done over the
course of a few weeks in February 2019.

The code base for this website is Open Source and anyone may [contribute][3]
additional fortune sources. The development [roadmap][4] contains some loose
ideas of the direction the project will be headed.

– James

<!-- GitHub Corners by Tim Holman -->
<a href="{{ site.github.repository_url }}" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:tomato; color:white; position: fixed; top: 0; border: 0; left: 0; transform: scale(-1, 1);" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>

[1]: https://wikipedia.org/wiki/Fortune_%28Unix%29
[2]: https://www.elementalidad.com/2008-09-08-steven-wright-aphorisms
[3]: {{ site.github.repository_url }}#contributing
[4]: {{ site.github.repository_url }}#roadmap
