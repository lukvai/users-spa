import React from 'react'
import Navigation from './Navigation'
import { Toaster } from 'react-hot-toast'
import AppLaoder from './AppLoader'

const AppLayout = ({ children }: { children: React.JSX.Element }): React.JSX.Element => {
  return (
    <div className="dark:text-slate-400">
      <div>
        <Toaster position="top-right" />
      </div>
      <Navigation />
      <AppLaoder />
      <div className="max-w-7xl mx-auto container my-5 relative">{children}</div>
    </div>
  )
}

export default AppLayout
