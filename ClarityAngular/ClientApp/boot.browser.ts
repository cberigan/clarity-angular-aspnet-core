import 'reflect-metadata';
import 'ie-shim'; // Internet Explorer 9 support.  
import 'es6-promise'; 
import 'core-js/es6/symbol'; 
import 'core-js/es6/object'; 
import 'core-js/es6/function'; 
import 'core-js/es6/parse-int'; 
import 'core-js/es6/parse-float'; 
import 'core-js/es6/number'; 
import 'core-js/es6/math'; 
import 'core-js/es6/string'; 
import 'core-js/es6/date'; 
import 'core-js/es6/array'; 
import 'core-js/es6/regexp'; 
import 'core-js/es6/map'; 
import 'core-js/es6/set'; 
import 'core-js/es6/weak-map'; 
import 'core-js/es6/weak-set'; 
import 'core-js/es6/typed'; 
import 'core-js/es6/reflect'; 
import 'core-js/es7/reflect'; 
import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module.browser';

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        // Before restarting the app, we create a new root element and dispose the old one
        const oldRootElem = document.querySelector('app');
        const newRootElem = document.createElement('app');
        oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
        modulePromise.then(appModule => appModule.destroy());
    });
} else {
    enableProdMode();
}

// Note: @ng-tools/webpack looks for the following expression when performing production
// builds. Don't change how this line looks, otherwise you may break tree-shaking.
const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);
