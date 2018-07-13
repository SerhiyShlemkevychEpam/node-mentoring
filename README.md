# Homework 1
_**Deadline**: 09/11/2017 18:00 (GMT+3)_

## Node:

1. Install [**Node.js**](https://nodejs.org/uk/download/) (choose any option that suites your needs `nvm`, `brew`, `apt`, `.exe`, etc...)
1. Create a directory for the future project
1. Use `npm -l` to discover available npm commands and full usage info with
1. Set author name and email for **npm config**
1. Initialize **package.json** using **npm** command
1. Configure scripts section to include:
    * **start** section to run main application file
    * **test** section to run application tests that we will cover in future
1. Start structure your app. Create main application file. This file should be executed on `npm start`
1. Discover and install following npm packages.
    * Babel
    * Babel preset es2015
    * Babel preset stage 2
    * Babel register
1. After the installation all those packages should be listed in **package.json**

## Modules:

1. Create **config** directory inside your project
1. Create **json** module to store configs for our application. For now let’s put just a **name** of our app - `NodeMP HW App`
1. Create folder **models**
1. In **model** directory create user module. It should be **js** module and it should implement and export class User (**use ECMAScript 2015**) with a **constructor** where it should log ‘User module’ only
1. In **model** directory create product module. Use same flow as for the user module
1. In main application file import config module. Log application name to console.
1. In main application file import **models**. It should be one import command that should bring all our models to the app.
1. Create instance of **user** and **product** so they will log to the console.

# REPL

## Sample use
To start work with REPL just write in terminal
```shell
npm run repl -- -a <action> [-f <file_path>] | [-dr <dir_name>]
```
-a or -action must be one of the following:
- [transform](#transform)
- [io](#io)
- [transform-file](#transform-file)
- [save-to-json](#save-to-json)
- [bundle-css](#bundle-css)

## Action examples in use
### <a name="#transform"></a> **transform**
>Converts data from process.stdin to upper-case data on process.stdout

Command example
```shell
$ npm run repl -- -a transform
```

### <a name="io"></a> **io**
>Pipes the given file to process.stdout

Command example
```shell
$ npm run repl -- -a io -f <relative_file_path>
```

### <a name="transform-file"></a> **transform-file**
>Converts file from csv to json and output data to process.stdout

Command example
```shell
$ npm run repl -- -a transform-file -f <relative_csv_file_path>
```
### <a name="save-to-json"></a> **save-to-json**
>Converts `csvFile.csv` from csv to json and output data to `csvFile.json`

Command example
```shell
$ npm run repl -- -a save-to-json -f <relative_csv_file_path>
```
### <a name="bundle-css"></a> **bundle-css**
>Grab all css files in given dirname, contact them into one big css file.
Add contents of https://www.epam.com/etc/clientlibs/foundation/main.min.fc69c13add6eae57cd247a91c7e26a15.css at the bottom of this big css.
Save big css file in the same directory and called bundle.css

Command example
```shell
$ npm run repl -- -a bundle-css --path <relative_directory_path>
```
