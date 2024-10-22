import { Banner, Video } from '~ek/components'
import aboutPageBg from '/public/assets/images/about-page-bg.jpg'

const aboutCompanyStyles: Readonly<TwClasses> = {
  description:
    'px-4 tablet:px-10 laptop:px-15 widescreen:px-25 mb-6 laptop:mb-10 text-base laptop:text-xl font-normal laptop:leading-7 text-gray-3 flex flex-col justify-between gap-y-6',
}
const styles = aboutCompanyStyles as Readonly<StyleRecord>

export function AboutCompany(): React.ReactElement {
  return (
    <>
      <Banner
        title='Haqqımızda'
        img={aboutPageBg}
      />

      <div className={styles.description}>
        <p>
          “Özəl mətbəx mebeli” ideyası ilk dəfə 2017-ci ildə Embawood komandası
          tərəfindən layihə şəklində hazırlanmışdır. 2018-ci ildən artıq
          şirkətin “EmbaKitchen” brendi adı altında satışların
          reallaşdırılmasına başlandı.
        </p>
        <p>
          Sifarişlərimiz sırf müştərilərə özəl hazırlanan mətbəx, dəhliz, kupe
          dolab həlləridir ki, burada müştərinin fikrində canlandırdığı mebel
          vizualı dizaynerlərimiz tərəfindən işlənərək onun mənzili üçün xüsusi
          hazırlanır. Mebel həlləri müştərinin istəyinə uyğun özəl ölçülərlə,
          seçiminə uyğun olan materiallarla yığılır.
        </p>
      </div>

      <Video />
    </>
  )
}
