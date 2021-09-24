import { combineReducers } from "redux";
import projectsReducer from "./projectReducer";

const reducers = combineReducers({
    project:projectsReducer
}) 

export default reducers;

export type RootState = ReturnType<typeof reducers>