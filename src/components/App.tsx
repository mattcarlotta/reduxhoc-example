import type { ConnectedProps, PickReduxState, ReactElement } from "../types";
import { connect } from "react-redux";
import { buttonToggle } from "../actions";
import RenderTitle from "./RenderTitle";
import logo from "../images/logo.svg";
import "./App.css";

const mapState = ({ toggles }: PickReduxState<"toggles">) => ({
  toggles,
});

const mapDispatch = {
  buttonToggle,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

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
