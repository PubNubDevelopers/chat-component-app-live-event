import React, { createContext, useReducer, useContext } from "react"
// import { nanoid } from "nanoid"
// import { findItemIndexById } from "./utils/findItemIndexById"
// import { moveItem } from "./utils/moveItem"
// import { DragItem } from "./DragItem"

interface Event {
  id: string
  text: string
}

interface List {
  id: string
  text: string
  tasks: Event[]
}

export interface AppState {
  simulateLogin: true;  
  lists: List[]
}

type Action =
  | {
      type: "ADD_LIST"
      payload: string
    }
  | {
      type: "ADD_EVENT"
      payload: { text: string; listId: string }
    }


interface AppStateContextProps {
  state: AppState
  dispatch: React.Dispatch<any>
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {

    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: "1", text: action.payload, tasks: [] }
        ]
      }
    }
    case "ADD_EVENT": {
    //   const targetLaneIndex = findItemIndexById(
    //     state.lists,
    //     action.payload.listId
    //   )
    //   state.lists[targetLaneIndex].tasks.push({
    //     id: nanoid(),
    //     text: action.payload.text
    //   })

      return {
        ...state
      }
    }
   
    default: {
      return state
    }
  }
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }]
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }]
    }
  ]
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData)

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
