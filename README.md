# Example Project: WPARP - Web Project Auto Reload Poll
[![License](https://img.shields.io/github/license/TobiasBriones/example.programming.tool.php.wparp)](https://github.com/TobiasBriones/example.programming.tool.php.wparp/blob/master/LICENSE)

Script that reloads the page on the browser when changes are detected on the targeted files to keep track of; similar to a Live Server. Changes are detected only if the file size changes with respect to the last modification.

## Getting Started
Copy the folder "_wparp" into the root of your project, then open "_wparp/auto_reload.js" and in the end of the file set and run the algorithm, like this

```
wparp.pollingFiles(["../index.html"]);
wparp.start();
```

Also add the script to the HTML page to reload

```
<script src="_wparp/auto_reload.js"></script>
```

You can also test with the included sample by opening index.html from PHP localhost.

### Prerequisites
You need a PHP server to run your project on localhost.

### WPARP Algorithm
[![Algorithm](https://raw.githubusercontent.com/TobiasBriones/images/master/example-projects/example.programming.tool.php.wparp/wparp-algorithm.png)](https://github.com/TobiasBriones/images/tree/master/example-projects)

## License
Example Project: WPARP - Web Project Auto Reload Poll

Copyright © 2019-2020 Tobias Briones. All rights reserved.

This software is licensed under the [MIT License](https://github.com/TobiasBriones/example.programming.tool.php.wparp/blob/master/LICENSE).
