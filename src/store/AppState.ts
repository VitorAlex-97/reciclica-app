import { LoadingStates } from "./loading/LoadingStates";
import { LoginState } from "./login/LoginState";

export interface AppState {
    loading: LoadingStates;
    login: LoginState;
}