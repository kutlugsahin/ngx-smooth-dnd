# Sample Packaging Application

This app was put together to show how to create and distribute an Angular library. It corresponds with the talk given at the Angular Mountain View Meetup ([video here](https://www.youtube.com/watch?v=c8Acc94s8aQ)).

The steps below correspond to commits in this repo (after initial setup) so you should be able to refer to the individual commits to see the changes made.

This project uses the [Angular CLI](https://github.com/angular/angular-cli) and [Nx](https://github.com/nrwl/nx) as the base application. The techniques described for building libraries should work for most projects whether they use these or not. Paths and some of the build steps might be slightly different, but should be easily applicable to most projects.

This example uses the NgPackagr project. If for some reason this project won't work for your application's needs, [Juri Strumpflohner](https://github.com/juristr) gave [a great talk](https://www.youtube.com/watch?v=K4YMmwxGKjY) on a more manual setup that allows fine-grained configuration.

## Steps

### Step 0: Initial Setup

Make sure you have the Angular CLI installed. This application was put together using schematics from the `nx` library, so install those as well:

`npm install -g @angular/cli @nrwl/schematics` or `yarn global add @angular/cli @nrwl/schematics`

Clone this repo and run `npm install` or `yarn`.

The app is initially set up to map the library through the repository name plus the library name.  So the import is `import {NgxTabsLibModule} from '@angular-cli-lib-example/ngx-tabs-lib';`. Using the Angular CLI you can build and run the small sample application with two tabs (the tabs are part of the library):

`ng serve`

Open a browser to http://localhost:4200

### Step 1: Name and map the library

Adjust the import name to what I want to publish this library as. In this case, it should be `ngx-tabs-lib`. This requires changing `paths` property of the `tsconfig.json` file:

```
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "ngx-tabs-lib": ["libs/ngx-tabs-lib"]
    }
  },
  ...
}

```

Also, imports in the project pointing to `@angular-cli-lib-example/ngx-tabs-lib` should now just point to `ngx-tabs-lib`.

### Step 2: Library package.json

A library needs a `package.json` file when distributed to NPM. So we should create this file for our library.

Because it's a library, you don't want all the same dependencies as your project. The dependencies should be trimmed down to the minimal ones needed. In this case, the `package.json` should look something like this (note it's marked as `private` so it doesn't accidentally get published to NPM):

```
{
  "name": "ngx-tabs-lib",
  "version": "0.0.0",
  "license": "MIT",
  "private": true,
  "peerDependencies": {
    "@angular/common": "^5.1.0",
    "@angular/core": "^5.1.0"
  }
}
```

### Step 3: Add ng-packagr

Add the [`ng-packagr`](https://github.com/dherges/ng-packagr) as a dev dependency for your project. Currently  version 2 is the one supporting Angular v5, but it's still in release candidate. Install with the `@next` version:

`npm install --save-dev ng-packagr@next`
`yarn add --dev ng-packagr@next`

### Step 4: Configure ng-packagr

Configure a `package.json` script to run `ng-packagr`. The command takes a `--project` (or `-p`) argument  pointing to the `package.json` file for the library being built. If you don't provide this, it will use your root `package.json` file. The changes to your **root** package.json file look something like this:

```
  "scripts": {
    "build:lib": "ng-packagr -p libs/ngx-tabs-lib/package.json"
  }
```

Running `npm run build:lib` (or `yarn build:lib`) will execute this command. However, it will throw an error until you configure your **library** `package.json`. First you want to add a `$schema` property which allows your IDE to provide typeahead suggestions for the `ngPackage` custom property in `package.json`. You should then configure an `entryFile` for the library. This will often be your `index.ts` file or `public_api.ts`. You should also configure the distribution directory. The  updated library `package.json` looks something like this:

```
{
  "$schema": "../../node_modules/ng-packagr/package.schema.json",
  "name": "ngx-tabs-lib",
  "version": "0.0.0",
  "license": "MIT",
  "private": true,
  "peerDependencies": {
    "@angular/common": "^5.1.0",
    "@angular/core": "^5.1.0"
  },
  "ngPackage": {
    "lib": {
      "entryFile": "public_api.ts"
    },
    "dest": "../../dist/ngx-tabs-lib"
  }
}
```

You can now run `npm run build:lib` and see your built package in the `dist` folder. This package can be picked up and published straight to NPM.

### Step 5 [Optional]: Build app against built library

It's generally a good idea to test building your application against the distribution version of your  library. In order to do this with the CLI, you will need to create some new `tsconfig` files and a new app in the CLI. The new `tsconfig` files should point to the built version of your library. And the new app in the CLI should point to the new `tsconfig` file:

**`./tsconfig.packaged.json`**: In the root of the project, refer to the distributed sources
```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "paths": {
      "ngx-tabs-lib": ["ngx-tabs-lib"]
    }
  }
}
```

> NOTE: Due to a [current issue](https://github.com/angular/angular-cli/issues/7714) in the CLI, you will need to build your libraries to your project root, which is why the `paths` option above isn't `dist/ngx-tabs-lib`. The corresponding change should be made in your library's `package.json` in the `ngPackage > dest` path. You will probably also want to add the library dist directory name to your `.gitignore` so you don't accidentally commit it.

**./apps/demo/src/tsconfig.packaged.json**: In your app, add a new `tsconfig.packaged.json` file. It should extend from the root `tsconfig.packaged.json` and update the `outDir`:
```
{
  "extends": "../../../tsconfig.packaged.json",
  "compilerOptions": {
    "outDir": "../../../dist/apps/demo-packaged",
    "module": "es2015"
  },
  "include": [
    "**/*.ts"
  ],
  "exclude": [
    "**/*.spec.ts"
  ]
}
```

**./.angular-cli.json**: Create a new app pointing to this new config. In this case, the app was called `demo`, so I copied the `demo` config from the `apps` property and modified the `name`, `outDir`, and `tsconfig` properties, leaving the rest unchanged. This sample only shows relevant changes:

```
{
  // ... other properties remain unchanged
  "apps": [
    // ... other apps
    {
      "name": "demo-packaged",
      "outDir": "dist/apps/demo-packaged",
      "tsconfig": "tsconfig.packaged.json",
      // ... other configs should match the app you copied
    }
  ]
}
```

### Step 6 [Optional]: Private APIs

The Angular Compiler provides a mechanism to expose private APIs. In fact, directives you declare in the library and any services you export will get a private symbol in the resulting build. Take a look at the `d.ts` file generated for this library (`ngx-tabs-lib.d.ts` became the default as that's the name of our library in the `package.json`):

```
/**
 * Generated bundle index. Do not edit.
 */
export * from './public_api';
export { TabComponent as ɵb } from './src/tab/tab.component';
export { TabsComponent as ɵa } from './src/tabs/tabs.component';
```

The components are exported with a barred-o character (`ɵ`) followed by a single letter. The Angular compiler needs these symbols to be exported to manage compilation. However, you can customize the exported name so you can use these private exports in your other dependent libraries. If you export a private symbol prefixed by the `ɵ` character, that name will be retained. So modifying the `public_api.ts` file we can control the exported name:

**./libs/ngx-tabs-lib/public_api.ts:**
```
export { NgxTabsLibModule } from './src/ngx-tabs-lib.module';
export {TabsComponent as ɵTabsComponent} from './src/tabs/tabs.component';
export {TabComponent as ɵTabComponent} from './src/tab/tab.component';
```

This resuls in a different `ngx-tabs-lib.d.ts` in a new build:
```
/**
 * Generated bundle index. Do not edit.
 */
export * from './public_api';
```

And now the `public_api.ts` file retained the renamed component names:

```
export { NgxTabsLibModule } from './src/ngx-tabs-lib.module';
export { TabsComponent as ɵTabsComponent } from './src/tabs/tabs.component';
export { TabComponent as ɵTabComponent } from './src/tab/tab.component';
```

Now if you want, you can import these symbols across packages:

**./apps/demo/src/app/app.component:**
```
import { Component, OnInit, ViewChild } from '@angular/core';
import { ɵTabsComponent as TabsComponent } from 'ngx-tabs-lib';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(TabsComponent) tabs: TabsComponent;

  constructor() {}

  ngOnInit() {
    console.log(this.tabs);
  }

}
```