import React from 'react'
import { Option } from '../../../interfaces/form/Option'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: Option[]
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, ...props }, ref) => {
    return (
      <div>
        <label
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <select
          ref={ref}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
)

export default Select
