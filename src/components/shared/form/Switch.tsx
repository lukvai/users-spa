import { useState } from 'react'

interface SwitchButtonProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  checked?: boolean
  label: string
}

const Switch = ({ onChange, checked, disabled, label }: SwitchButtonProps): React.JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(!!checked)
  return (
    <div>
      <label className="flex flex-col gap-2 cursor-pointer">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={(e) => {
            onChange(e)
            setIsChecked(!isChecked)
          }}
          disabled={disabled}
          checked={isChecked}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  )
}

export default Switch
