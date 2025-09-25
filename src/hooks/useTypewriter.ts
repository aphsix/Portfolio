import { useState, useEffect } from 'react'

interface UseTypewriterOptions {
  text: string
  speed?: number
  delay?: number
}

export const useTypewriter = ({
  text,
  speed = 150,
  delay = 0
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let intervalId: NodeJS.Timeout

    const startTyping = () => {
      let index = 0
      intervalId = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          clearInterval(intervalId)
          setIsComplete(true)
        }
      }, speed)
    }

    if (delay > 0) {
      timeoutId = setTimeout(startTyping, delay)
    } else {
      startTyping()
    }

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, delay])

  return { displayText, isComplete }
}