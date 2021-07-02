import type { ConnectedProps, PickReduxState } from "./types.d";
import ComponentBranch from "@example/reduxhoc";
import type { ReactElement } from "react";
import { connect } from "react-redux";
import { buttonToggle } from "./actions";
import logo from "./logo.svg";
import "./App.css";

const mapState = ({ toggles }: PickReduxState<"toggles">) => ({
  toggles,
});

const mapDispatch = {
  buttonToggle,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const PageTitleA = ({ sub }: string): ReactElement => <h1>Title A {sub}</h1>;
const PageTitleB = ({ sub }: string): ReactElement => <h1>Title B {sub}</h1>;

const RenderTitle = ComponentBranch(
  ({ toggles }: PickReduxState<"toggles">) => toggles,
  PageTitleA,
  PageTitleB
);

const App = ({ buttonToggle, toggles }: PropsFromRedux): ReactElement => (
  <div className="app">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <pre className="toggle-state">
        <code>Toggles State: {toggles.toString()}</code>
      </pre>
      <RenderTitle sub="sub title here!" />
      <button className="button" type="button" onClick={buttonToggle}>
        Toggle
      </button>
    </header>
  </div>
);

export default connector(App);
