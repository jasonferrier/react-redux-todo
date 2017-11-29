//                ES6 default parameter (state)
function todoReducer(state = [], action) {
	switch(action.type) {
		case 'ADD_TODO':
		case 'REMOVE_TODO':
		case 'TOGGLE_TODO':
		default:
			return state
	}
}