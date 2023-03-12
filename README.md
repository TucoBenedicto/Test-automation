# Teste ENd TO END

Le end-to-end testing consiste à tester notre application comme un utilisateur standard sur un vrai navigateur. Pour mettre en place ce type de tests il est nécessaire d'automatiser les navigateurs afin de les faire dérouler un scénario précis. Cette automatisation peut se faire gràce à l'outil Selenium qui est très efficace mais pas forcément simple d'utilisation.

Nightwatch.js va vous permettre d'écrire vos tests en utilisant une syntaxe familière et de piloter les navigateurs via Selenium depuis NodeJS.

# probleme rencontré avec la version openclassroom

- Probleme avec le tp , les texte ne se lance pas , car il faut mettre a jours certains packages qui sont obsoletes. en effet les navigateurs lancé par nightwatch doivent etre au meme niveau de mise a jours que que les package npm.
- attention concernant la mise a jours des packet , il faut eviter de mettre a jours tous les packets , mais plutot uniquement cele :
    "chromedriver": "^111.0.0",
    "geckodriver": "^3.2.0",
    "nightwatch": "^2.6.17"
- Ajout du fichier de configuration nightwatch.conf.js
- aussi nightwatche est livrée avec des exemple de teste

- tuto a suivre : https://www.lambdatest.com/blog/nightwatch-js-tutorial-selenium-webdriver/

--------------------------------------

fichier de configuration ,si les fichiers exemples sont dans le chemin suivant : ./node_modules/nightwatch/exemples/tests
(lancement de firefox)

#  nightwatch.conf.js

// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  //src_folders: ['nightwatch/examples'],
  src_folders: [],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  //page_objects_path: ['nightwatch/page-objects'],
  page_objects_path: ["node_modules/nightwatch/examples/pages/"],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  //custom_commands_path: ['nightwatch/custom-commands'],
  custom_commands_path: ["node_modules/nightwatch/examples/custom-commands/"],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  //custom_assertions_path: ['nightwatch/custom-assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: "",

  webdriver: {},

  test_workers: {
    enabled: true,
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: "http://localhost",

      screenshots: {
        enabled: false,
        path: "screens",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "firefox", //lancement de firefox, pour chrome , changer firefox par chrome
      },

      webdriver: {
        start_process: true,
        server_path: "",
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        alwaysMatch: {
          acceptInsecureCerts: true,
          "moz:firefoxOptions": {
            args: [
              // '-headless',
              // '-verbose'
            ],
          },
        },
      },
      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ],
        },
      },

      webdriver: {
        start_process: true,
        server_path: "",
        cli_args: [
          // --verbose
        ],
      },
    },
  },
};

# package.json

{
  "name": "testez-vos-applications-front-end-avec-javascript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "devDependencies": {
    "@babel/preset-env": "^7.20.2",
    "@nightwatch/storybook": "^0.1.15",
    "@testing-library/dom": "^9.0.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^14.4.3",
    "babel-jest": "^29.5.0",
    "chromedriver": "^111.0.0",
    "geckodriver": "^3.2.0",
    "jest": "^29.5.0",
    "jest-html-reporter": "^3.7.0",
    "nightwatch": "^2.6.17"
  },
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}



# testez-vos-applications-front-end-avec-javascript
Code source de Façadia - le projet fil rouge du cours "Testez vos applications Front End avec Javascript" 
