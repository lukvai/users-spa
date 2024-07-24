import { useEffect, useState } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { getTheme, isDarkTheme, setTheme } from '../../services/theme'
import { Theme } from '../../interfaces/Theme'

const ThemeButton = (): React.JSX.Element => {
  const theme = getTheme()
  setTheme(theme)
  const [isDark, setIsDark] = useState(isDarkTheme())

  const darkModeHandler = (isDark: boolean) => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    setTheme(isDark ? Theme.Dark : undefined)
  }, [isDark])

  return (
    <button type="button" onClick={() => darkModeHandler(isDark)}>
      {isDark ? <IoMoon className="fill-sky-400" /> : <IoSunny />}
    </button>
  )
}

export default ThemeButton
