import gcf from "../src/index";
import nest from "./nest";

describe("Should fetch correct file info", () => {
  it("Gets basic info", () => {
    const data = gcf();
    expect(data).toStrictEqual({
      path: expect.any(String),
      file: "gcf.test.ts",
      column: "21",
      line: "6",
      string: "gcf.test.ts:6:21",
    });
  });

  it("Gets info in nested function", () => {
    const deeplyNested = function () {
      return function () {
        return () => gcf();
      };
    };
    const data = deeplyNested()()();
    expect(data).toStrictEqual({
      path: expect.any(String),
      file: "gcf.test.ts",
      column: "25",
      line: "19",
      string: "gcf.test.ts:19:25",
    });
  });

  it("Gets info in different file", () => {
    const data = nest();
    expect(data).toStrictEqual({
      path: expect.any(String),
      file: "nest.ts",
      column: "13",
      line: "4",
      string: "nest.ts:4:13",
    });
  });
});
