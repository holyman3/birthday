import { useEffect, useState } from 'react'
import Splash from './Splash'
import './App.css'

const cards = [
  {
    emoji: '🎂',
    heading: 'Happy Birthday',
    text: "Today is all about you — and I hope it's filled with everything that makes you smile. You deserve a day as bright and lovely as you are.",
  },
  {
    emoji: '🌸',
    heading: 'Your Smile',
    text: 'You have this smile that makes everything feel lighter. I hope you share it as often as possible.',
  },
  {
    emoji: '✨',
    heading: 'Truly One of a Kind',
    text: "There's something about you that I can't quite put into words—a quiet magic that sets you apart from everyone else.",
  },
  {
    emoji: '🎀',
    heading: 'Your Style',
    text: 'The way you dress, the way you carry yourself—it’s like every little detail is perfectly you. I notice.',
  },
  {
    emoji: '💖',
    heading: 'Your Eyes',
    text: "I could get lost in your eyes. They're warm, kind, and they seem to hold a thousand untold stories.",
  },
  {
    emoji: '🌙',
    heading: 'Shy & Sweet',
    text: 'Your quietness isn’t a wall—it’s a garden. I hope one day you’ll let me walk through it.',
  },
  {
    emoji: '🍰',
    heading: 'Your Hair',
    text: "I don't know if you realize how beautiful your hair is. It frames your face like a painting I could stare at all day.",
  },
  {
    emoji: '🧸',
    heading: 'So Interesting',
    text: "Every time we talk, I wanna know something new. You're like a book I can't put down—and I've only just started reading.",
  },
  {
    emoji: '💌',
    heading: 'A Quiet Thought',
    text: "Sometimes I catch myself thinking about you at random moments. I don't mind—it's a nice way to spend a daydream.",
  },
  {
    emoji: '🌈',
    heading: 'Your Presence',
    text: "You bring color into a room just by being there. It's not loud or flashy—just a gentle warmth that makes people feel at home.",
  },
  {
    emoji: '🎁',
    heading: 'Looking Forward',
    text: "Every time I see you, my day gets a lot better. I'm already looking forward to the next time.",
  },
]

function App() {
  const [current, setCurrent] = useState(0)

  const [splashVisible, setSplashVisible] = useState(true)

  // Auto‑hide splash after 4 seconds (matches CSS animation end)
  useEffect(() => {
    const timer = setTimeout(() => setSplashVisible(false), 4000)
    return () => clearTimeout(timer)
  }, [])

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
      {splashVisible && <Splash />}
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
              Start Again!
            </button>
          )}
        </div>

        <div className="counter">
          {current + 1} / {cards.length}
        </div>
      </div>

      <div className="hearts">
        {[...Array(75)].map((_, i) => {
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
              {isHeart ? '💗' : isHeart2 ? '🌸' : '🩷'}
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
