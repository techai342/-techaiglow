import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const themes = [
  "https://i.ibb.co/4w3C1mCH/0d77ebc9799d4a0a131af2949f17222d.jpg",
  "https://i.ibb.co/v8yVMGN/996ced4d12483929c3fd8aa4a90be285.jpg",
  "https://i.ibb.co/GQw6Xwwt/b875cadf4323f561b442d18af6be4985.jpg",
  "https://i.ibb.co/vCbfDkKr/fa553ac9c5a7a559d902ff3319a4e313.jpg",
  "https://i.ibb.co/4R3r0LBm/49611315729d7b19fd06d9c0d41980cd.jpg",
  "https://i.ibb.co/XxcZG2Cf/257a0631e3051140356b697ff111f3fd.jpg",
  "https://i.ibb.co/KcM8C8Dc/1eb1ed7004c702b0087d0216fecc6647.jpg",
  "https://i.ibb.co/8D6nPr8W/00e1768d577f36ce3c1dc5adb0aaa460.jpg",
  "https://i.ibb.co/KcM8C8Dc/1eb1ed7004c702b0087d0216fecc6647.jpg",
  "https://i.ibb.co/KcM8C8Dc/1eb1ed7004c702b0087d0216fecc6647.jpg"
]

export function ThemeProvider({ children }) {
  const [index, setIndex] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    let t
    if (auto) {
      t = setInterval(() => {
        setIndex((p) => (p + 1) % themes.length)
      }, 5000)
    }
    return () => clearInterval(t)
  }, [auto])

  // expose theme values
  return (
    <ThemeContext.Provider value={{
      themes,
      index,
      setIndex,
      auto,
      setAuto
    }}>
      {children}
    </ThemeContext.Provider>
  )
}