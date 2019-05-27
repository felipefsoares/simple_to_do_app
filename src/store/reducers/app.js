export const SHOW_LOADING_INDICATOR = "SHOW_LOADING_INDICATOR"
export const HIDE_LOADING_INDICATOR = "HIDE_LOADING_INDICATOR"

export const showLoadingIndicator = () => ({
  type: SHOW_LOADING_INDICATOR,
})

export const hideLoadingIndicator = () => ({
    type: HIDE_LOADING_INDICATOR,
  })

const initialState = {
  isLoading: false,
  // ... other state variables ...
};

export default clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING_INDICATOR:
      return {
        ...state,
        isLoading: true
      };
    case HIDE_LOADING_INDICATOR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};