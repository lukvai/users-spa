import { Theme } from '../interfaces/Theme'

export const getTheme = (): string | undefined => localStorage.getItem(Theme.Theme) ?? undefined

export const isDarkTheme = (): boolean => localStorage.getItem(Theme.Theme) === Theme.Dark

export const setTheme = (theme?: string): void => {
  if (theme === Theme.Dark) {
    localStorage.setItem(Theme.Theme, Theme.Dark)
    document.body.classList.add(Theme.Dark)
  } else {
    localStorage.removeItem(Theme.Theme)
    document.body.classList.remove(Theme.Dark)
  }
}
