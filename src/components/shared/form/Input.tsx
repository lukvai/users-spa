import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={props.id} className="primary-label">
        {label}
      </label>
      <input ref={ref} className="primary-input" {...props} />
    </div>
  )
})

export default Input
