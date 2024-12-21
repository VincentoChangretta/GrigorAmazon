const initialState = {
  testValue: [],
};

const ADD_TEST_VALUE = "add_test_value";
const CLEAR_TEST_VALUE = "clear_test_value";

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST_VALUE:
      return {
        ...state,
        testValue: [...state.testValue, action.payload.flat()],
      };
    case CLEAR_TEST_VALUE:
      return { ...state, testValue: [] };
    default:
      return state;
  }
};

export const addTestValueCreator = (payload) => ({
  type: ADD_TEST_VALUE,
  payload,
});
export const clearTestValueCreator = () => ({ type: CLEAR_TEST_VALUE });
