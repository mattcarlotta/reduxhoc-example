import type { RootState } from "./store";
export type { ReactElement } from "react";
export type { ConnectedProps } from "react-redux";

export type PickReduxState<T> = Pick<RootState, T>;
