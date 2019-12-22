# Example Project - WPARP - Web Project Auto Reload Poll
[![License](https://img.shields.io/github/license/TobiasBriones/example.programming.tool.php.wparp)](https://github.com/TobiasBriones/example.programming.tool.php.wparp/blob/master/LICENSE)

Script that reloads the page on the browser when changes are detected on the targeted files to keep track of. Changes are detected only if the file size changes with respect to the last modification.

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
![algorithm](https://user-images.githubusercontent.com/39544153/51433372-7768fd80-1c0e-11e9-9aeb-6b7d1ff32fc5.png)
