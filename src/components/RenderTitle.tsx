import ComponentBranch from "@example/reduxhoc";
import type { PickReduxState, ReactElement } from "../types";
import "./RenderTitle.css";

const RenderTitle = ComponentBranch(
  ({ toggles }: PickReduxState<"toggles">) => toggles,
  ({ sub }: string): ReactElement => <h1 className="title-a">Title A {sub}</h1>,
  ({ sub }: string): ReactElement => <h1 className="title-b">Title B {sub}</h1>
);

export default RenderTitle;
