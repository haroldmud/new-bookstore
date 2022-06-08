const CHECKING_STATUS = 'bookstore/redux/Categories/CHECKING_STATUS';
const UPDATING_STATUS = 'bookstore/redux/Categories/UPDATING_STAUTS';

function Categories(state = [], action) {
  switch (action.type) {
    case 'CHECKING_STATUS':
      return 'in construction';
    case 'UPDATING_STATUS': {
      state.forEach((element) => {
        if (element.id === action.id) {
          element.status = action.newUpdating;
        }
      });
      return state;
    }
    default:
      return state;
  }
}

export default Categories;

export function checking() {
  return { type: CHECKING_STATUS };
}

export function updating(id, newUpdating) {
  return { type: UPDATING_STATUS, newUpdating, id };
}
