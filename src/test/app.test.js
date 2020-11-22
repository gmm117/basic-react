import React from "react";
import renderer from "react-test-renderer";
import App, { SubApp } from "../App";

describe("app.test", () => {
  const testRenderer = renderer.create(<App />);
  const testInstance = testRenderer.root;

  test("props chilren function test", () => {
    expect(testInstance.findByType(SubApp).props.title).toBe(
      "Hello React App!!"
    );
    expect(testInstance.findByProps({ className: "sub" }).children).toEqual([
      "Study React",
    ]);
  });

  test("subApp function test", () => {
    const tree = renderer.create(<SubApp title="mike" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
