## Your Fortune

A small hobby project to bring the BSD `fortune` app to the web.

This project started as a server-side php script, and morphed into a client-side javascript application.

### Roadmap

* -Refactor for GitHub pages-
* -Add a Jekyll page for each fortune datasource.-
* -Add site navigation.-
* Add additional fortune sources.
* Automate the conversion of fortune data files into JSON files.
* Image file & meme generator.
* Add Facebook Open Graph, Instagram, Twitter Card integration.
* Implement a webservice to return a single random fortune.
    * This probably means moving off of static GitHub Pages.

### Contributing

You can contribute to site improvements (see [GitHub pages](https://help.github.com/categories/github-pages-basics/) and [Jekyll](https://jekyllrb.com/) documentation).

You may also contribute data sets, until we're able to write the generator script, each contribution should contain:

* the `_includes/data/dataset.json` file, renamed to something relevant, ensure
  your JSON file [passes JSONlint validation](https://jsonlint.com/), and is
  formatted with one quote per line.
* the `_pages/dataset.md` file to configure and expose the page on the web.
* an entry in `_data/navigation.yml` to link the page.

### Getting up and running locally

1. Install the ruby and the bundler gem.

2. Fork this repository, then clone it to your machine.

3. Run `bundle install`.

4. Run `bundle exec jekyll serve`.

5. Make changes, commit them, and contribute pull requests.

### Support or Bugs

[File an issue](https://github.com/your-fortune/your-fortune.github.io/issues/new)
