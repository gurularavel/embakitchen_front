interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Badge({
  children,
  className,
}: Readonly<BadgeProps>): React.ReactElement {
  return <span className={className}>{children}</span>
}
