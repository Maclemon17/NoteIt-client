const host = "http://localhost:5000/api";

const signUpRoute = `${host}/user/register`;
const signInRoute = `${host}/auth/login`;
const profileRoute = `${host}/user/profile`;
const getAllNotesRoute = `${host}/user/notes`;
const addNoteRoute = `${host}/user/notes`;
const editNoteRoute = `${host}/user/notes`;
const deleteNoteRoute = `${host}/user/notes`;


export {
    signUpRoute,
    signInRoute,
    profileRoute,
    getAllNotesRoute,
    addNoteRoute,
    editNoteRoute,
    deleteNoteRoute,
}