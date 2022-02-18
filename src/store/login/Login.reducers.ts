import { actionSheetController, initialize } from "@ionic/core";
import { createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";
import { login, loginFail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./Login.actions";
import { LoginState } from "./LoginState";

const initialState: LoginState = AppInitialState.login

const reducer = createReducer(initialState,
    on(recoverPassword, (currentState) => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true
        };
    }),
    on(recoverPasswordSuccess, (currentState) => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        };
    }),
    on(recoverPasswordFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.error,
            isRecoveredPassword: false,
            isRecoveringPassword: false
        };
    }),
    on(login, (currentState) => {
        return {
            ...currentState,
            error: null,
            isloggedIn: false,
            isloggingIn: true
        }
    }),
    on(loginSuccess, (currentState) => {
        return {
            ...currentState,
            isloggedIn: true,
            isloggingIn: false
        }
    }),
    on(loginFail, (currentyState, action) => {
        return {
            ...currentyState,
            error: action.error,
            isloggedIn: false,
            isloggingIn: false
        }
    })
)

export function loaginReducer(state: LoginState, action) {
    return reducer(state, action);
}