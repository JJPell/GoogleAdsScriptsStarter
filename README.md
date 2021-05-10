# GoogleAdsScriptsStarter 😎
This is a starter(template, barebones, skeleton) project for Google Ads Scripts. The aim for this starter project was to improve the developer experience when coding for the Google Ads Scripts environment. It allows you to create scripts using modern ES6+ JavaScript and TypeScript syntax while still being able to build and run your script on the outdated Google Ads Scripts [Rhino Engine](https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)) (ES3) runtime.

Some of the key advantages of using this project are:

* Compilation of multiple files.
* Easily import, use and build external npm packages in to your script.
* TypeScript.
* Google Ads Scripts custom types.
* JavaScript ES6+ features.
* Builds into a single ES3 JavaScript build file.

## ⚙ Getting Started

Once you have cloned this repository and ran `npm install` all that is required to do the following to build and deploy your script.

1) Run the `npm run build`
2) Copy and paste the compiled javascript file within the `build` folder to your google ads script.

Simple! 

## ⭐ GoogleAdsScript Types

The standard google ads scripts global variables are automatically available within the global scope, the same as they are within a normal google ads script.
This means that you can reference `AdsApp` and `AdsManagerApp` globally and if you're using TypeScript the types for variables set to method calls from these added and checked implicitly.

To reference any of the google ads scripts types within the project, you can do so using the `GoogleAdsScripts` namespace. You will find all the types nested under this, and in the same structure as the [Google Ads Scripts documentation website](https://developers.google.com/google-ads/scripts/docs/whats-new), where things are nested under either `AdsApp` or `AdsManagerApp`.

Just a few of these types and where to find them:
| Entity  | Type |
| ------------- | ------------- |
| Account  | `GoogleAdsScripts.AdsApp.Account`  |
| Campaign  | `GoogleAdsScripts.AdsApp.Campaign`  |
| ManagedAccount  | `GoogleAdsScripts.AdsManagerApp.ManagedAccount`  |

An example of using the `AdGroup` type as a function parameter:
```typescript
function doSomethingToAdGroup(adGroup: GoogleAdsScripts.AdsApp.AdGroup): void {
  // ...
}
```
To shorten the type name you can do the following:
```typescript
type AdGroup = GoogleAdsScripts.AdsApp.AdGroup;

function doSomethingToAdGroup(adGroup: AdGroup): void {
  // ...
}
```

## 🚀 Examples

* [AdsApp example script](https://gist.github.com/JJPell/7e0b690cac51686c87d346deb28cf545)
* [AdsManagerApp example script](https://gist.github.com/JJPell/0f8499c762e20f413a20dea1497e1975)

## 📦 External Packages

You cannot use external packages that require either node.js or brower environment dependencies.
A good rule of thumb is to look at the number of dependencies listed on the npm web page for the package.
