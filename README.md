# Example Project: WPARP - Web Project Auto Reload Poll

[![EP](https://raw.githubusercontent.com/TobiasBriones/images/main/example-projects/example.programming.tool.php.wparp/ep-wparp-badge.svg)](https://tobiasbriones.github.io/example-project/ep/wparp)
&nbsp;
[![GitHub Repository](https://raw.githubusercontent.com/TobiasBriones/general-images/main/example-projects/badges/ep-gh-repo-badge.svg)](https://github.com/TobiasBriones/example.programming.tool.php.wparp)

[![Project GitHub License](https://img.shields.io/github/license/TobiasBriones/example.programming.tool.php.wparp.svg?style=flat-square)](https://github.com/TobiasBriones/example.programming.tool.php.wparp/blob/main/LICENSE)

Example project consisting of a script that polls a PHP script to reload the page in the browser
when changes are detected on the targeted files to keep track of; similar to a Live Server. Changes
are detected only if the file size changes with respect to the last modification.

## Getting started

Copy the folder "_wparp" into the root of your project, then open "_wparp/auto-reload.js" and in the
end of the file set and run the algorithm, like this

```js
wparp.pollingFiles(['../index.html']);
wparp.start();
```

Also add the script to the HTML page to reload

```html
<script src="_wparp/auto-reload.js"></script>
```

You can also test with the included sample by opening index.html from PHP localhost.

### Prerequisites

You need a PHP server to run your project on localhost.

### WPARP Algorithm

[![Algorithm](https://raw.githubusercontent.com/TobiasBriones/images/main/example-projects/example.programming.tool.php.wparp/wparp-algorithm.png)](https://github.com/TobiasBriones/images/tree/main/example-projects)

## Screenshots

[![Screenshot 1](https://raw.githubusercontent.com/TobiasBriones/images/main/example-projects/example.programming.tool.php.wparp/screenshot-1.png)](https://github.com/TobiasBriones/images/tree/main/example-projects)

---

[![Screenshot 2](https://raw.githubusercontent.com/TobiasBriones/images/main/example-projects/example.programming.tool.php.wparp/screenshot-2.png)](https://github.com/TobiasBriones/images/tree/main/example-projects)

## Contact

This software: [GitHub Repository](https://github.com/TobiasBriones/example.programming.tool.php.wparp)

Tobias Briones: [GitHub](https://github.com/TobiasBriones)

Example Project: [App](https://tobiasbriones.github.io/example-project)

## About

**Example Project: WPARP - Web Project Auto Reload Poll**

Example project consisting of a script that polls a PHP script to reload the page in the browser
when changes are detected on the targeted files to keep track of; similar to a Live Server.

Copyright © 2019-2020 Tobias Briones. All rights reserved.

### License

This software is licensed under the [MIT License](./LICENSE).
