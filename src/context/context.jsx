import React, { useContext } from "react"
AppContext = React.createContext()

const API_ENDPOINT = `https://opentdb.com/api.php?`

const url = ""
// Reference URL
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
