import { useState } from 'react'
import './App.css'

const cards = [
  {
    heading: 'Happy Birthday',
    text: "Today is all about you and I hope it's filled with everything that makes you smile. You deserve a day as bright and lovely as you are.",
  },
  {
    heading: 'Your Smile',
    text: 'You have this smile that makes everything feel lighter. I hope you share it as often as possible.',
  },
  {
    heading: 'Truly One of a Kind',
    text: "There's something about you that I can't quite put into words, a quiet magic that sets you apart from everyone else.",
  },
  {
    heading: 'Your Style',
    text: 'The way you dress, the way you carry yourself, it’s like every little detail is perfectly you. I notice.',
  },
  {
    heading: 'Your Eyes',
    text: "I could get lost in your eyes. They're warm, kind, and they seem to hold a thousand untold stories.",
  },
  {
    heading: 'Every Little Detail',
    text: "I remember the things you say, the small phrases. And those shy little smiles while you play with your hair. They stay with me longer than you'd ever guess. I notice it all, because it's you.",
  },
  {
    heading: 'Shy & Sweet',
    text: 'Your quietness isn’t a wall, it’s a garden. I hope one day you’ll let me walk through it.',
  },
  {
    heading: 'Your Hair',
    text: "I don't know if you realize how beautiful your hair is. It frames your face like a painting I could stare at all day.",
  },
  {
    heading: 'So Interesting',
    text: "Every time we talk, I wanna know something new. You're like a book I can't put down and I've only just started reading.",
  },
  {
    heading: 'A Quiet Thought',
    text: "So many times I catch myself thinking about you. I don't mind, it's a nice way to spend a daydream.",
  },
  {
    heading: 'Looking Forward',
    text: "Every time I see you, my day gets a lot better. I'm already looking forward to the next time.",
  },
]

function App() {
  const [current, setCurrent] = useState(0)

  const nextCard = () => {
    if (current < cards.length - 1) {
      setCurrent(current + 1)
    }
  }

  const restart = () => {
    setCurrent(0)
  }

  const card = cards[current]

  return (
    <div className="app">
      <div className="card" key={current}>
        <h2 className="heading">{card.heading}</h2>
        <p className="text">{card.text}</p>

        <div className="buttons">
          {current < cards.length - 1 ? (
            <button className="next-btn" onClick={nextCard}>
              Next 💕
            </button>
          ) : (
            <button className="next-btn" onClick={restart}>
              Once More!
            </button>
          )}
        </div>

        <div className="counter">
          {current + 1} / {cards.length}
        </div>
      </div>

      <div className="hearts">
        {[...Array(50)].map((_, i) => {
          const number = Math.random()
          const isHeart = number < 0.33
          const isHeart2 = number > 0.33 && number < 0.66
          return (
            <div
              key={i}
              className="heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
                opacity: Math.random() * 0.5 + 0.1,
              }}>
              {isHeart ? '💗' : isHeart2 ? '🌸' : '💕'}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

/*import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [activeDataIndex, setActiveDataIndex] = useState(0)

  const data = [
    {
      title: 'Youre so beautiful',
      desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
      emoji: '🌸',
    },
  ]

  const handleClick = (index: number): void => {
    if (index < data.length) setActiveDataIndex(index)
  }

  return (
    <div className={styles.wrapper}>
      {data.map(
        (data, index) =>
          index === activeDataIndex && (
            <article className={styles.info}>
              <h1 className={styles.title}>{data.title}</h1>
              <p className={styles.desc}>{data.desc}</p>
              <div className={styles.emoji}>{data.emoji}</div>
              <button className={styles.button} onClick={() => handleClick(index)}>
                Click Me!
              </button>
            </article>
          ),
      )}
    </div>
  )
}

export default App
 */
