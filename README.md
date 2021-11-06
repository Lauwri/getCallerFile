# getCallerFile

Get path, file, line and column of origin of function that's being called

## Installation

Install through npm

```
npm i @lauwri/gcf
yarn add @lauwri/gcf
```

## Usage

```
import gcf from "@lauwri/gcf";

// Param is distance to a file, 2 (default) is a file before the gcf in this case example.ts
console.log(gcf(2));

 * {
 * path: 'Path/to/file/example.ts',
 * file: 'example.ts',
 * line: '3',
 * column: '16',
 * string: 'example.ts:3:16'
 * }

```
