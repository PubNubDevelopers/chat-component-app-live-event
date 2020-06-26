import React, { Component,useContext,useReducer } from 'react'
import { LiveEventContext } from '../../liveevents-context';

const _liveEventContext = useContext(LiveEventContext);

export const LiveEventContextProvider = (props: React.Context<String>) => {

    const reducer = (state: State, action: Action) => {
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

      const [state, dispatch] = useReducer(reducer, initialState)

  // Context state
//   state = {
//     liveEventContext: _liveEventContext,
//   }
  //const [eventInfo, dispatch] = useReducer(reducer, _liveEventContext);

      return (
          <div></div>
    //   <LiveEventContext.Provider value={[state, dispatch]}>
    //     {props.children}
    //   </LiveEventContext.Provider>
    );
  // Method to update state
//   setLiveEvent = (newContextState: any) => {
//     this.setState(prevState => ({ newContextState }))
//   }

//   render() {
//     const { children } = this.props
//     const { liveEventContext } = this.context

//     return (
//       <LiveEventContext.Provider
//         value={[this.state, null]}>
//         {children}
//       </LiveEventContext.Provider>
//     )
//   }
}


