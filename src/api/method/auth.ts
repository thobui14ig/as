import ApiConstants from '../ApiConstants'
import api from './index'

export const login = (email: string, password: string) => {
    return api(ApiConstants.LOGIN, {email: email, password: password}, 'post')
}