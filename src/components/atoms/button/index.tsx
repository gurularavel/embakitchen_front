import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: React.ReactNode
  classes?: string
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const buttonStyles: Readonly<TwClasses> = {
  button:
    'bg-transparent border-none outline-none focus:border-none focus:outline-none',
}
const styles = buttonStyles as Readonly<StyleRecord>

export function Button({
  children,
  classes,
  ...props
}: Readonly<ButtonProps>): React.ReactElement {
  return (
    <button
      className={twMerge(styles.button, classes ?? '')}
      {...props}
    >
      {children}
    </button>
  )
}
