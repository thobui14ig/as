import api from ".";
import ApiConstants from "../ApiConstants";

export function fetchingUsers() {
	return api(ApiConstants.USER, {}, 'get')
}


export function deleteUsers(id: number) {
	alert(id)
	// return
	return api(ApiConstants.USER + '/' + id, {}, 'delete')
}
