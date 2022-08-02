import axios from 'axios';

export const login = async (payload) => {
    try {

        const res = await axios.post('/login', payload)

        return res.data

    } catch (err) {
        return err.message
    }
}
export const register = async (payload) => {
    try {

        const res = await axios.post('/register', payload)

        return res.data

    } catch (err) {
        return err.message
    }
}
export const loadUser = async () => {
    try {

        const res = await axios.get('/api/user')

        return res.data
    } catch (err) {
        console.log(err.message)
    }
}

export const logout = async () => {
    try {

        const res = await axios.post('/logout');

        return res.data
    } catch (err) {
        console.log(err.message)
    }
}