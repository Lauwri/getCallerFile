export type FileData = {
  path: string;
  file: string;
  line: string;
  column: string;
  string: string;
};

/**
 * Parses information from error stack
 * @param distance Distance to a file, 2 is origin before getCallerFile, 1 is getCallerFile
 * @param error Custom stack
 * @returns {FileData | undefined}
 */
const getCallerFile = (
  distance = 2,
  error?: Error,
  throwError = false
): FileData | undefined => {
  const e = error || new Error();
  const stack = e.stack && e.stack.split("\n")[distance];
  if (!stack) {
    if (throwError) throw new Error(`No stack data for distance ${distance}`);
    return undefined;
  }
  const regex = /([^\/\\]+):(\d+):(\d+)\D*$/;
  const info = regex.exec(stack);
  const pathRegex = /([^()|><]*):(\d+):(\d+)\D*$/;
  const dirtyPath = pathRegex.exec(stack);
  const path = dirtyPath && dirtyPath[1].replace(/\/\//g, "/");
  return info && path
    ? {
        path,
        file: info[1],
        line: info[2],
        column: info[3],
        string: `${info[1]}:${info[2]}:${info[3]}`,
      }
    : undefined;
};

export default getCallerFile;
