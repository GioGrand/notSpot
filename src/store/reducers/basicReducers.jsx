
const initState = {
    page: 'rosa',
    backgroundcolour: ''
}

const todos = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return [
      
        {
          page: action.page
        }
      ]
   
    default:
      return state
  }
}

export default todos