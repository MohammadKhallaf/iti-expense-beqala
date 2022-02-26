import {
LOGIN_SUCCESS,
LOGIN_FAIL,
USER_LOADED_SUCCESS,
USER_LOADED_FAIL,
AUTHENTICATED_SUCCESS,
AUTHENTICATED_FAIL,
PASSWORD_RESET_SUCCESS,
PASSWORD_RESET_FAIL,
PASSWORD_RESET_CONFIRM_SUCCESS,
PASSWORD_RESET_CONFIRM_FAIL,
SIGNUP_SUCCESS,
SIGNUP_FAIL,
ACTIVATION_SUCCESS,
ACTIVATION_FAIL,
GOOGLE_AUTH_SUCCESS,
GOOGLE_AUTH_FAIL,
FACEBOOK_AUTH_SUCCESS,
FACEBOOK_AUTH_FAIL,
LOGOUT
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GOOGLE_AUTH_SUCCESS:
        case FACEBOOK_AUTH_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload,
                manager: payload.is_staff
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                error: false,
            }
        case FACEBOOK_AUTH_FAIL:
        case GOOGLE_AUTH_FAIL:
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                error: true,
                manager: null,
                user: null
            }
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                error: false,
                user: null,
                manager: null,
            }
            case PASSWORD_RESET_SUCCESS:
            case PASSWORD_RESET_FAIL:
            case PASSWORD_RESET_CONFIRM_SUCCESS:
            case PASSWORD_RESET_CONFIRM_FAIL:
            case ACTIVATION_SUCCESS:
            case ACTIVATION_FAIL:    
                return {
                    ...state
                }
        default:
            return state
    }
};