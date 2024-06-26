# Jekyll Base

This is a base setup for Jekyll powered static generated websites. Some of the features included are specific for the CloudCannon CMS.

# Get your local environment setup on OSX

## Install and use the newer version of Node

- Node.js v8.0.0 and v6.9.1 has been tested and works fine.

# Setup the site

## Clone the repo

$ git clone git@github.com:variantstudios/vs-jekyll-base

## Setup the site

### Install the Ruby Gems

`$ bundle install`

### Install the Node packages

`$ npm install`

## Compile

To compile Jekyll, SASS and run a local server (with browsersync) you'll need to run `$ gulp`

# Site information:

- Currently we have Jekyll version 3.2.1 to be used locally and also in our CloudCannon site.
- Make sure you replace the following placeholder graphics:
  - /favicon.ico
  - /siteicon.png
  - /apple-touch-icon.png
  - /touch-icon.png
- A 'robots.txt' file initially set to Disallow everything to avoid getting your site indexed on search engines before it's ready. Once your website is ready to launch remove this robots.txt file and rename the 'USE-WHEN-live--robots.txt' file to 'robots.txt' so it will not tell search engines to not index your site. If you add 'noindex: true' to your the frontmatter of any file it will add it to be not indexed on the robots.txt file.
- A '/301.md' file where you can add your site's 301 reirects.
- A '/404.html' file that will show when when a page can not be found. Feel free to customize the content or remove it.

# What's included in this base:

1. XML Sitemap powered by a jekyll plugin. https://github.com/jekyll/jekyll-sitemap
2. Jekyll Paginate Version 2 powered by a jekyll plugin. https://github.com/sverrirs/jekyll-paginate-v2
3. An atom.xml for a blog and if you don't have one feel free to remove it.

$ nvm use 11.15.0
$ gulp
