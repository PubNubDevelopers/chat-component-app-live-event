import React, { useReducer, createContext } from "react";


const initialState = {
    eventID: "0001",
    loading: false,
    error: null,
    participantsCount: 0,
    hostName: 'Your name',
    events: [],
    pubnubclient:null,
    pubnubconfig: null,
    pubnubstore: null,
    simulateLogin: true,


  };

export const LiveEventContext = React.createContext(initialState);


  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_EVENT":
        return {
            events: [...state.events, action.payload]
        };
    //   case "DEL_CONTACT":
    //     return {
    //       contacts: state.contacts.filter(
    //         contact => contact.id !== action.payload
    //       )
    //     };
    //   case "START":
    //     return {
    //       loading: true
    //     };
    //   case "COMPLETE":
    //     return {
    //       loading: false
    //     };
      default:
        throw new Error();
    }
  };
  
//   export const LiveEventContextProvider = props => {
//     const [state, dispatch] = useReducer(reducer, initialState);
  
//     return (
//       <LiveEventContext.Provider value={[state, dispatch]}>
//         {props.children}
//       </LiveEventContext.Provider>
//     );
//   };