angularjs-boilerplate-tp
========================

A sophisticated build management system for angularjs

A kickstarter for AngularJS projects.

##Quick Start

Install Node.js, Grunt CLI, Yeoman, cg-angular and then:

```sh
git clone git@github.com:10pearls-nabeelkhan/angularjs-boilerplate-tp.git
cd angularjs-boilerplate-tp
sudo npm -g install grunt-cli karma bower
npm install
bower install
grunt serve
```

Finally open `http://localhost:9001/` in your browser and enjoy!

##Purpose

angularjs-boilerplate-tp is designed to kickstart angularjs development while following the best practices from google. It contains a best-practice directory structure to ensure code reusability and maximum scalability. It comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com),
[Angular UI](http://angular-ui.github.io),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap),
[Font Awesome](http://fortawesome.github.com/Font-Awesome), and
[LESS](http://lesscss.org). Lastly, it contains a sophisticated
[Grunt](http://gruntjs.org)-based build system to ensure maximum productivity.
All you have to do is clone it and start coding!

### Directory Structure

At a high level, the structure looks roughly like this:

```
angularjs-boilerplate-tp/
  |- build/
  |- node_modules/
  |- src/
  |  |- index.html
  |  |- app.js
  |  |- app.less
  |  |- app/
  |  |  |- <app logic>
  |  |  |- components/
  |  |  |  |- <reusable directives/filters/modules>
  |  |- assets/
  |  |  |- images/
  |  |  |  |- <static files>
  |  |  |- less/
  |  |  |  |- main.less
  |- vendor/
  |  |- angular/
  |  |- angular-animate/
  |  |- angular-bootstrap/
  |  |- angular-cookies/
  |  |- angular-mocks/
  |  |- angular-resource/
  |  |- angular-ui-router/
  |  |- angular-ui-utils/
  |  |- bootstrap/
  |  |- font-awesome/
  |- .bowerrc
  |- bower.json
  |- Gruntfile.js
  |- server.js
  |- package.json
```
