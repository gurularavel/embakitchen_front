import { useTranslations } from 'next-intl'
import { AboutCompany } from '~ek/components'

export default function AboutCompanyPage(): React.ReactElement {
  const t = useTranslations('AboutCompanyPage')

  return <AboutCompany />
  // return (
  //   <div>
  //     <h1>{t('title')}</h1>
  //   </div>
  // )
}
