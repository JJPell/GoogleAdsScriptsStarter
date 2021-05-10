/**
 * Script entry point
 */
function main(): void {
  Logger.log('Hello World');
}

// The webpack build proccess detects this and creates a global function called main
// which is a requirement for google ads scripts. You don't need to do this for all functions.
global.main = main;
