import type { RootState } from "./store";
export { ConnectedProps } from "react-redux";

export type PickReduxState<T> = Pick<RootState, T>;
