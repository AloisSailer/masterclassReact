import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

const tweets = [
  "Meu primeiro tweet",
  "Teste",
  "Deu certo tweetar!",
  "Começando um novo assunto",
]

import "./Timeline.css"

export function Timeline() {
  return (
    <main className="timeLine">
      <Header title="Home" />
      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/aloissailer.png"
            alt="Foto Alois Sailer"
          />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}
