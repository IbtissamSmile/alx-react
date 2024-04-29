import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export function login(email, password) {
    return {
        type: LOGIN,
        payload: {
            user: {
                email,
                password
            }
        }
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}

export function displayNotificationDrawer() {
    type: DISPLAY_NOTIFICATION_DRAWER
}

export function hideNotificationDrawer() {
    type: HIDE_NOTIFICATION_DRAWER
}