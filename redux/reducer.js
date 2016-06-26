export default function reducer(state, action) {
  switch (action.type) {
      case 'addMark':
      return Object.assign({}, state, {
        marks: [action.asset, ...state.assets]
      });
      default:
        return state;
  }
}
