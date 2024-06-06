export const socialContactsStyles: TailwindStyle = {
  wrapper:
    'absolute right-25 top-1/2 -translate-y-1/2 z-10 hidden laptop:block',
  layout: (layout: unknown) =>
    `flex ${(layout as LayoutOption) === 'vertical' ? 'flex-col gap-y-3' : ''}`,
}
