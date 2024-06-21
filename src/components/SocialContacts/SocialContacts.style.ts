export const socialContactsStyles: TailwindStyle = {
  layout: (layout: unknown) =>
    `flex ${(layout as LayoutOption) === 'vertical' ? 'flex-col' : ''}`,
}
