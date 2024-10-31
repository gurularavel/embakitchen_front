interface BadgeProps {
  label: string
}

export function Badge({ label }: Readonly<BadgeProps>): React.ReactElement {
  return <span>{label}</span>
}
