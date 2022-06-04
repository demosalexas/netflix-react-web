

const authenticated = (state: any, action: any) => {
  state.authenticated = action.payload;
};

export default authenticated;

