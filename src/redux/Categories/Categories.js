const CHECKING_STATUS = 'bookstore/redux/Categories/CHECKING_STATUS';

function Categories(state = [], action) {
  switch (action.type) {
    case CHECKING_STATUS:
      return 'under the construction';
    default:
      return state;
  }
}

export default Categories;

export function checking() {
  return { type: CHECKING_STATUS };
}
