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
      <main className=" flex h-screen  items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 py-10 ">
        <SetupForm />
      </main>
    )
  }

  if (loading) return <Loading />

  const { correct_answer, question, incorrect_answers } = questions[index]
  const answers = [...incorrect_answers, correct_answer]
  return (
    <>
      <main className="flex  h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <Modal />
        <section className=" w-11/12 space-y-10 rounded-2xl border bg-white py-10 px-8 shadow-md  lg:max-w-3xl lg:space-y-4 xl:space-y-10">
          <div className="space-y-2 text-right tracking-wider text-green-500">
            <p className="text-black">Total Questions: {questions.length} </p>
            <p className="">
              Correct Answers: {correct} / {index + 1}
            </p>
          </div>
          <article className="flex w-full flex-col items-center  justify-center space-y-8">
            <h2
              className="w-full text-center text-2xl font-semibold md:text-3xl"
              dangerouslySetInnerHTML={{ __html: question }}
            />
            <div className="flex w-2/3 flex-col space-y-4">
              {answers.map((answer, index) => {
                return (
                  <button
                    key={index}
                    className="bg-indigo-500 py-2 tracking-wider text-white"
                    dangerouslySetInnerHTML={{ __html: answer }}
                    onClick={() => checkAnswer(answer === correct_answer)}
                  />
                )
              })}
            </div>
          </article>
          <button
            className="ml-auto block rounded bg-slate-700 px-4 py-2 tracking-wider text-white shadow-lg focus:outline-none md:px-8"
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
