# WPARP - Web Project Auto Reload Poll
Script that reloads the page on the browser when changes are detected on the targeted files to keep track of. Changes are detected only if the file size changes with respect to the last modification.

## Getting Started
Copy the folder "_wparp" into the root of your project, then open "_wparp/auto_reload.js" and in the end of the file set and run the algorithm, like this

```
wparp.pollingFiles(["../index.html"]);
wparp.start();
```

You can also test with the included sample by opening index.html from PHP localhost.

### Prerequisites
You need a PHP server to run your project on localhost.
