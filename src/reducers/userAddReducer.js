export default (state, action) => {
    switch (action.type) {
      case "ADD_USER" :
      let newUser = {
      id : state.users.length + 1,
      name : 'Aachal'
      }
      return{
      ...state,
      users: state.users.concat(newUser)
      }
      default:
        return state;
    }
  };