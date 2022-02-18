import { createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";
import { hide, show } from "./Loading.actions";
import { LoadingStates } from "./LoadingStates";

const initialState: LoadingStates = AppInitialState.loading;

const reducer = createReducer({},
    on(show, () => {
        return {show: true};
    }),
    on(hide, () => {
        return {hide: false};
    })
)

export function loadingReducer (state: LoadingStates, action) {
    return reducer(state, action);
}