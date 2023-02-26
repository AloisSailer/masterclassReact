import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Status.css"

const answers = ["Concordo...", "Olha, faz sentido!", "Parabéns pelo progresso"]

export function Status() {
  return (
    <main className="Tweet">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, ut corrupti. Tempore ipsum odit provident hic eveniet, autem recusandae adipisci cumque sit quia, a ducimus ipsam ab reprehenderit beatae quidem!" />
      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/aloissailer.png"
            alt="Foto Alois Sailer"
          />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
