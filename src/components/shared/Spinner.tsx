import { ImSpinner } from 'react-icons/im'

interface SpinnerProps {
  show?: boolean
}

const Spinner = ({ show }: SpinnerProps): React.JSX.Element => {
  if (!show) {
    return <></>
  }
  return (
    <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
      <div className="flex items-center">
        <ImSpinner className="animate-spin h-8 w-8 " />
      </div>
    </div>
  )
}

export default Spinner
