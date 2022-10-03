import React, { useContext, useState } from "react"
import axios from "axios"
const AppContext = React.createContext()

const API_ENDPOINT = `https://opentdb.com/api.php?`

// Category with their ID
const table = {
  generalKnowledge: 9,
  Computers: 18,
  Mathematics: 19,
  Geography: 22,
  Art: 25,
  Animals: 27,
  VideoGames: 15,
  Mythology: 20,
  Celebrities: 26,
  Vehicles: 28,
  Gadgets: 30,
  Books: 10,
  Film: 11,
  Music: 12,
  sports: 21,
  history: 23,
  politics: 24,
}

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
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  })

  //Fetch questions from API
  const fetchQuestions = async (url) => {
    setLoading(true)
    setWaiting(false)
    const response = await axios(url).catch((err) => console.log(error))
    if (response) {
      const data = response.data.results
      if (data.length > 0) {
        setQuestions(data)
        setLoading(false)
        setWaiting(false)
        setError(false)
      } else {
        setWaiting(true)
        setError(true)
      }
    } else {
      setWaiting(true)
    }
  }

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1
      if (index > questions.length - 1) {
        openModal()
        return 0
      } else {
        return index
      }
    })
  }

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1)
    }
    nextQuestion()
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setWaiting(true)
    setCorrect(0)
    setIsModalOpen(false)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuiz({ ...quiz, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { amount, category, difficulty } = quiz
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
    fetchQuestions(url)
  }

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        nextQuestion,
        checkAnswer,
        openModal,
        closeModal,
        isModalOpen,
        handleChange,
        handleSubmit,
        quiz,
        table,
      }}
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
