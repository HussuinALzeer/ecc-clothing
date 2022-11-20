import { USerActionTypes } from "./user.type"

export const setCurrentUser = user => ({
    type: USerActionTypes.SET_CURRENT_USER,
    payload: user
})