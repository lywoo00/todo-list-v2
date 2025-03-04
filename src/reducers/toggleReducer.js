// export const initialState = {
//   completAccordion: false,
//   optionTooltip: null
// }

// export function toggleReducer(state, action) {
//   switch (action.type) {
//     case 'TOGGLE_ACCORDION':
//       return {
//         ...state, completAccordion: !state.completAccordion
//       }
//       case 'TOGGLE_TOOLTIP':
//         return {
//           ...state, optionTooltip: state.optionTooltip === action.payload.id ? null : action.payload.id
//         }
//         case 'CLOSE_TOOLTIP':
//           return {
//             ...state, optionTooltip: null
//           }
//           default:
//             return state
//   }
// }