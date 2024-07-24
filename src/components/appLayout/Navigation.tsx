import ThemeButton from './ThemeButton'
import { Link } from '@tanstack/react-router'

const Navigation = (): React.JSX.Element => {
  return (
    <nav className="py-4 bp-1 dark:border-slate-400 border-b">
      <div className="max-w-7xl mx-auto container flex justify-between mx-auto">
        <div className="flex gap-5">
          <Link className="font-bold" to="/users">
            Users
          </Link>
          <Link className="font-bold" to="/users/create">
            Add user
          </Link>
        </div>
        <ThemeButton />
      </div>
    </nav>
  )
}

export default Navigation
