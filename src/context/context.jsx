import React, { useContext, useState } from "react"

const AppContext = React.createContext()

const API_ENDPOINT = `https://opentdb.com/api.php?`

const url = ""
// Reference URL
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [error, setError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <AppContext.Provider
      value={{ waiting, loading, questions, index, correct, error }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
