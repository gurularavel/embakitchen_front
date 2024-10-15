import { useTranslations } from 'next-intl'

export default function AboutCompanyPage(): React.ReactElement {
  const t = useTranslations('aboutPage')

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )
}
