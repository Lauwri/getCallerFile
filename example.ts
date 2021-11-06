import gcf from "./src/index";

// Param is distance to a file, 2 (default) is a file before the gcf in this case example.ts
console.log(gcf(2));

/**
 * {
 * path: 'Path/to/file/example.ts',
 * file: 'example.ts',
 * line: '3',
 * column: '16',
 * string: 'example.ts:3:16'
 * }
 */
