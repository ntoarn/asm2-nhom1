import { IUser } from "@/interfaces/User";

type State = {
    users: IUser[]
}
type Action =
    | { type: "SET_USERS"; payload: IUser[] }
    | { type: "ADD_USER"; payload: IUser }
    | { type: "UPDATE_USER"; payload: IUser }
    | { type: "DELETE_USER"; payload: string }
const userReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload }
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload] }
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user._id === action.payload._id ? action.payload : user
                )
            }
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            }
        default:
            return state
    }
}

export default userReducer
