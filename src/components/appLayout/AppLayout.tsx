import React from 'react'
import Navigation from './Navigation'
import { Toaster } from 'react-hot-toast'

const AppLayout = ({ children }: { children: React.JSX.Element }): React.JSX.Element => {
  return (
    <div className="dark:text-slate-400">
      <div>
        <Toaster position="top-right" />
      </div>
      <Navigation />
      <div className="max-w-7xl mx-auto container my-5">{children}</div>
    </div>
  )
}

export default AppLayout
