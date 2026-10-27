import './Button.css'

/** Reusable button (used for "SEARCH" and "WATCH NOW"). */
function Button({ children, className = '', ...props }) {
  return (
    <button className={`button ${className}`} type="button" {...props}>
      {children}
    </button>
  )
}

export default Button
