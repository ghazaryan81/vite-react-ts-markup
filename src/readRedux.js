// // --------------------------------------------------------------
// // ACTION TYPE
// // --------------------------------------------------------------
// export const ENTITY_READ_REQUEST         = "ENTITY_READ_REQUEST";
// export const ENTITY_READ_SUCCESS         = "ENTITY_READ_SUCCESS";
// export const ENTITY_READ_FAILURE         = "ENTITY_READ_FAILURE";



// const initialState = {}

// export const reducerTodoRead =  (state = initialState, {type, payload}) => {
//   switch (type) {
//     case FETCH_PHONES_SUCCESS: return {...state, payload}
//   }
//   return state
// }







// // // --------------------------------------------------------------
// // // API
// // // --------------------------------------------------------------
// // export const entityReadApi     = async function() {
// //  const data = await fetch("http://localhost:4001/todos");
// // };

// // let response = await fetch(url);

// // if (response.ok) {
// //   let json = await response.json();
// // } else {
// //   alert("Ошибка HTTP: " + response.status);
// // }

// // // --------------------------------------------------------------
// // // REDUCER
// // // --------------------------------------------------------------
// // const initialState = {};
// // export default (state = initialState, {type, payload}) => {
// //   switch (type) {
// //     case ENTITY_READ_SUCCESS:         return entityReadSelector(state, payload.content);
// //     default:                          return {...state};
// //   }
// // }

// // // --------------------------------------------------------------
// // // SELECTORS
// // // --------------------------------------------------------------
// // function entityReadSelector(state, content) {
// //  return {...state, ...content}
// // }

// // // --------------------------------------------------------------
// // // DISPATHING
// // // --------------------------------------------------------------
// // const entityReadDispatch = () => async (dispatch) => {
// //  dispatch({ type: ENTITY_READ_REQUEST });
// //  try {
// //    const entityRead = await entityReadApi();
// //    dispatch({ type: ENTITY_READ_SUCCESS, payload: { content: entityRead } });
// //  } catch (error) {
// //    dispatch({ type: ENTITY_READ_FAILURE, payload: { error: error } });
// //  }
// // }





// // 