import SetupForm from "./components/SetupForm"
import Loading from "./components/Loading"
import { useGlobalContext } from "./context/context"
import Modal from "./components/Modal"

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()
  if (waiting) {
    return (
      <main className="h-screen  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center ">
        <SetupForm />
      </main>
    )
  }

  if (loading) return <Loading />

  const { correct_answer, question, incorrect_answers } = questions[index]
  const answers = [...incorrect_answers, correct_answer]
  return (
    <>
      <main className="h-screen  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center ">
        <Modal />
        <section className="bg-white w-11/12 lg:max-w-3xl py-10 px-8 space-y-6 rounded-2xl shadow-md">
          <p className="text-right text-green-500 tracking-wider">
            Correct Answers: {correct} / {index + 1}
          </p>
          <article className="flex flex-col justify-center items-center space-y-6">
            <h2
              className="text-2xl md:text-3xl font-semibold w-full text-center"
              dangerouslySetInnerHTML={{ __html: question }}
            />
            <div className="flex flex-col space-y-4 w-2/3">
              {answers.map((answer, index) => {
                return (
                  <button
                    key={index}
                    className="bg-indigo-500 tracking-wider py-2 text-white"
                    dangerouslySetInnerHTML={{ __html: answer }}
                    onClick={() => checkAnswer(answer === correct_answer)}
                  />
                )
              })}
            </div>
          </article>
          <button
            className="block ml-auto px-4 py-2 bg-indigo-600 text-white tracking-wider rounded shadow-lg focus:outline-none"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        </section>
      </main>
    </>
  )
}

export default App
