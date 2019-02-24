<h1 align="center">
   <a href="https://your-fortune.github.io">Your Fortune</a>
</h1>
<p align="center">
   <a href="https://your-fortune.github.io">
      <img src="https://your-fortune.github.io/assets/images/logo-fortune.svg" width=120 alt="Your Fortune logo" />
   <a>
</p>
<p align="center">Bringing the Unix fortune command to the web.</p>
<hr>

## Introduction

This project began as a server-side PHP script, and morphed into a
client-side javascript application.  Each page reload presents a
new quote. Read the [full story on our About page][1].

## Roadmap

* <del>Refactor for GitHub pages</del>
* <del>Add a Jekyll page for each fortune datasource.</del>
* <del>Add site navigation.</del>
* <del>Support dark mode.</del>
* <del>Support remote JSON.</del>
* Add additional fortune sources.
* Add a brutalist design, as an alternative of the minimalist design.
* Automate the conversion of fortune data files into JSON files.
* Image file & meme generator.
* Add Facebook Open Graph, Instagram, Twitter Card integration.
* Implement a webservice to return a single random fortune.
    * This probably means moving off of static GitHub Pages.

## Contributing

You can contribute to site improvements (see [GitHub pages][2]
and [Jekyll][3] documentation).

You may also contribute data sets. Each contribution should contain:

* A JSON-formatted dataset file containing quotes. The file should be
  placed inside `data/`, and named to something relevant,
  ensure your JSON file [passes JSONlint validation][4], and is
  formatted with one quote per line.

  The formatting rules are roughly as follows:

  ```
  {"data":[
  {"quote":"First quote", "author": "Someone"},
  {"quote":"Second quote", "author": "Someone else"},
  {"quote":"Author is optional"},
  {"quote":"Text may have *emphasis* (italics) or **strong emphasis** (bold), but please use sparingly."},
  {"quote":"Avoid \"straight quotes\", in favor of “curly quotes” when possible."},
  {"quote":"Prefer double-curly quotes and only use single curly quotes “when ‘quoting inside’ a quote.”"},
  {"quote":"Don't use the straight apostrophe in punctuation! ’Twil be the death of you.”"},
  {"quote":"Don’t use <em>html markup</em>"},
  {"quote":"Single newline characters like this-->\n are converted into <br> tags."},
  {"quote":"Double newline characters like this-->\n\n break the text into separate paragraphs with more whitespace."},
  {"quote":"The last quote in the JSON should not have a trailing comma to pass validation"}
  ]}
  ```

* A page for rendering the dataset in the website, placed inside `_pages/`.
  The following frontmatter is required:

  ```
  ---
  layout: quote
  permalink: /example
  title: Example Quotes
  description:  A selection of example fortunes.
  dataset: data/example.json
  ---
  ```

  Multiple datasets can be provided as follows:

  ```
  dataset:
    - data/example1.json
    - data/example1.json
  ```

  Remote datasets can be loaded as well, as long as the origin has a wildcard
  CORS header in the responses. Referencing JSON files from files hosted with
  GitHub Page and/or Raw GitHub (raw.githubusercontent.com) both work.

  ```
  dataset:
    - https://your-fortune.github.io/data/example.js
    - https://raw.githubusercontent.com/your-fortune/your-fortune.github.io/master/data/example.json
  ```

  Additionally, you may provide `style: example.css` to load a custom
  stylesheet placed in `assets/css/example.scss` containing special
  webfont or font-size declarations. (Ex. [steven-wright.scss][5]).
  Note: the SCSS file must start with an empty frontmatter section
  in order to be processed into CSS.

* an entry in `_data/navigation.yml` to the page's `permalink`.

## Getting up and running locally

1. Install the ruby and the bundler gem.

2. Fork this repository, then clone it to your machine.

3. Run `bundle install`.

4. Run `bundle exec jekyll serve`, then navigate to
   http://127.0.0.1:4000 in your Web browser.

5. Make changes, review in browser, commit them, and contribute pull requests.

## Support or Bugs

[File an issue](https://github.com/your-fortune/your-fortune.github.io/issues/new)

[1]: https://your-fortune.github.io/about
[2]: https://help.github.com/categories/github-pages-basics/
[3]: https://jekyllrb.com/
[4]: https://jsonlint.com/
[5]: https://github.com/your-fortune/your-fortune.github.io/blob/master/assets/css/steven-wright.scss
