/*
 * Copyright (c) 2019-2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * It manages the polling algorithm.
 */
function WPARP() {
  let active = false;
  let pollingRequestDone = false;
  let pollingTimeMS = 500;
  let pollingFiles = [];

  /**
   * Returns true iff the WPARP is running.
   */
  this.isRunning = () => {
    return active;
  };

  /**
   * Sets/Gets the polling time in ms.
   * @param timeMS polling time in ms
   */
  this.pollingTime = timeMS => {
    if (timeMS === undefined) {
      return pollingTimeMS;
    }
    if (active) {
      isRunningErrorMsg();
      return;
    }
    pollingTimeMS = timeMS;
  };

  /**
   * Sets/Gets the array of targeted files to keep track.
   * @param files array of targeted files
   */
  this.pollingFiles = files => {
    if (files === undefined) {
      return pollingFiles;
    }
    if (active) {
      isRunningErrorMsg();
      return;
    }
    pollingFiles = files;
  };

  /**
   * Starts the polling service.
   */
  this.start = () => {
    if (active) {
      isRunningErrorMsg();
      return;
    }
    active = true;
    const request = new XMLHttpRequest();
    const url = '_wparp/run.php';
    const params = JSON.stringify(pollingFiles);

    request.addEventListener('load', () => {
      const response = JSON.parse(request.responseText);

      if (response.status !== 'OK') {
        console.error(response.status);
        return;
      }
      runService();
      console.log('WPARP Files registered: ' + pollingFiles);
      console.log('WPARP running...');
      pollingRequestDone = true;
    });
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(params);
  };

  /**
   * Ends the polling service.
   * @param callback callback
   */
  this.end = callback => {
    const request = new XMLHttpRequest();

    request.addEventListener('load', () => {
      console.log('WPARP ended');
      active = false;

      if (callback !== undefined) {
        callback();
      }
    });
    request.open('POST', '_wparp/exit.php', true);
    request.send();
  };

  function sendRequest() {
    pollingRequestDone = false;
    const request = new XMLHttpRequest();
    const url = '_wparp/check.php';

    request.addEventListener('load', () => {
      const response = JSON.parse(request.responseText);

      if (response.data.hasChanges) {
        location.reload();
      }
      pollingRequestDone = true;
    });
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();
  }

  function runService() {
    const i = setInterval(() => {
      if (active && pollingRequestDone) {
        sendRequest();
      }
      else if (!active) {
        clearInterval(i);
      }
    }, pollingTimeMS);
  }

  function isRunningErrorMsg() {
    console.error('WPARP is running, end it first.');
  }
}

// Fields
const wparp = new WPARP();

// DOM
window.onbeforeunload = () => {
  wparp.end();
};

// Set up WPARP
//wparp.pollingTime(1000);
//wparp.pollingFiles(["../index.html"]);
//wparp.start();
