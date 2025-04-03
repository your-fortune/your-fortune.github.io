# Fortune data files

This project's data folder contains two data files for each collection:

-   a Unix fortune collection file (no file extension)

    a collection of fortune cookies, each separated from the next by a percent
    character (`%`) on a line by itself.

-   a JSON fortune collection file (for use on the website)

    a data format specific to this explicit website project. The data structure
    is described in the project's main README.md.


## Creating fortune collections for command line use

In order to actually use each fortune collection on the Unix command line
you must generate an index file based on the collection file. For example.
Given a collection "foo", generate a file "foo.dat" as an index into the
file "foo" using the strfile(8) program. The "dat" file should not be
contributed to this repository as it is out of scope of the current
fortune website project.

For details on the installation of the fortune files, see the manual
pages on your system.  On my system, I copy "foo" and "foo.dat" into
/usr/local/share/fortune/.  This may vary, of course.  Then, I start
fortune from my .profile file using all the fortune files in the
directories specified:

    fortune -a /usr/share/fortune /usr/local/share/fortune

In order to get a fortune cookie from collection "foo" only:

    fortune /usr/local/share/fortune/foo

The Virtual Library has translations of the Tao Te King.

* http://www.clas.ufl.edu/users/gthursby/taoism/ttc-list.htm
