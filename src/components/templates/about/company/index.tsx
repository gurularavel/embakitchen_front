import { Badge, Banner, Statistics, Video } from '~ek/components'

interface InfoBlock {
  title: string
  content: string
}

const infoBlocks: InfoBlock[] = [
  {
    title: 'Məqsədimiz',
    content:
      'Dizayn etdiyimiz hər bir özəl mebelin müştərinin mənzilində reallaşaraq öz varlığına qovuşduğunu görmək bizləri xoşbəxt edir. Mebeli dizayn etmək üçün ilk növbədə müştəriləri və onların istəklərini yaxşı anlamaq lazımdır. Özəl mətbəxləri hazırlayarkən əsas diqqət yetirdiyimiz məqam özümüzü mənzillərdə müştərilərin yerinə qoymaq, mətbəxin funksionallığı ilə rahatlığının düz mütənasibliyini təmin etmək və eyni zamanda da dizayner kimi müştərilərin və mətbəxin mexaniki ehtiyaclarını anlamaq, fərqli bucaqlardan baxaraq həllər təqdim etməkdir.',
  },
  {
    title: 'Peşəkar dizayner komandamız',
    content:
      'Özəl mebel dizaynı yalnızca dekorativ stildən ibarət deyil. Mətbəx hazırlamaq insanların gündəlik həyat tərzini anlamaq, paylaşdığı duyğuları, söhbətləri məkanın içərisinə yansıtmaqdır. Biz mətbəx mebelinin dizaynını hazırlayarkən özümüzü müştərinin əvəzinə mətbəxin mərkəzində dayanmış şəkildə təsəvvür edirik. Müştəriyə nə diskomfort yarada bilər, hansı çətinliklə üzləşə bilər - bütün bunları nəzərdən keçirərək onlar üçün optimal həllər müəyyənləşdiririk. Özəl hazırladığımız şkaf kupe, dəhliz mebelləri, qarderoblar müştərinin mənzili üçün tam uyğun formada işlənib yığılır.',
  },
  {
    title: 'İstehsal prosesi',
    content:
      'Özəl mətbəx mebellərinin istehsalı Embawood şirkətinə məxsus 3 böyük fabrikdə həyata keçirilir. Mebel fabriklərimiz Masallı, Xırdalan və Sumqayıt şəhərlərində yerləşir. Fabriklərimiz istehsalda Avtsriyanın beynəlxalq Blum şirkətindən və Türkiyənin Samet firmasından alınan keyfiyyətli materiallardan istifadə edir. Həmçinin istehsalda dünya mebel sənayesində yüksək iş əmsalı ilə tanınan "Holzma", "Homag", "İma", "Burkle", "Morbidelli", "Biesse" kimi avadanlıqlardan istifadə olunur ki, bunlar da mebellərimizin keyfiyyətində öz əksini tapır.',
  },
  {
    title: 'Keyfiyyət',
    content:
      'İstehsalda istifadə edilən texnologiyalar məşhur Avstriya şirkəti Blum tərəfindən təchiz edilir. Blum-un Keyfiyyət İdarəetmə Sistemi ISO 9001 sertifikatına malikdir və bu o deməkdir ki, müştərilərimiz hər bir Blum məhsulunda ardıcıl keyfiyyət gözləyə bilərlər. Səlahiyyətli İqtisadi Operator (AEO) statusu Blumun beynəlxalq təchizat zəncirindəki rolunun etibarlı olduğunu göstərən keyfiyyət nişanıdır.',
  },
]

interface AboutCompanyProps {
  banner: {
    title: string
    image: string
  }
  description: string
}

const aboutCompanyStyles: Readonly<TwClasses> = {
  description:
    'px-4 tablet:px-10 laptop:px-15 widescreen:px-25 mb-6 laptop:mb-10 text-base laptop:text-xl font-normal laptop:leading-7 text-gray-3 flex flex-col justify-between gap-y-6',
  statisticsWrapper: 'bg-gray-1 px-4 py-[50px] mb-6 desktop:mb-10',
  statisticsTitle:
    'mb-16 text-2xl leading-10 text-white text-center font-normal',
  solutions: 'px-4 laptop:px-15 mb-6 desktop:mb-10',
  solutionsTitle: 'text-2xl leading-9 text-gray-1 font-semibold mb-5',
  solutionsOptions: 'flex flex-nowrap gap-x-6 overflow-x-auto',
  solutionsBadge:
    'flex items-center h-[52px] px-6 bg-primary-9 whitespace-nowrap text-lg leading-6 font-medium text-primary-1',
  infoBlocksWrapper:
    'px-4 tablet:px-0 laptop:px-15 widescreen:px-0 mb-6 laptop:mb-25 flex flex-col laptop:flex-row laptop:flex-wrap gap-y-4 laptop:gap-6',
  infoBlock:
    'p-6 border border-solid border-gray-9 basis-full laptop:basis-1/2',
  infoBlockTitle:
    'mb-6 text-base laptop:text-xl laptop:leading-7 font-semibold text-primary-1',
  infoBlockContent: 'text-sm laptop:text-base font-normal text-gray-4',
}
const styles = aboutCompanyStyles as Readonly<StyleRecord>

export function AboutCompany({
  banner,
  description,
}: Readonly<AboutCompanyProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        img={banner?.image}
      />

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <Video />

      <div className={styles.statisticsWrapper}>
        <p className={styles.statisticsTitle}>
          EmbaKitchen brendi olaraq mebel məhsullarımızın istehsalında
          uzunmüddətli keyfiyyətə zəmanət verən texnologiyalardan istifadəni
          prioritet kimi müəyyənləşdiririk.
        </p>

        <Statistics context='about' />
      </div>

      <div className={styles.solutions}>
        <h5 className={styles.solutionsTitle}>
          Təqdim etdiyimiz mebel həlləri:
        </h5>
        <div className={styles.solutionsOptions}>
          {[
            'Özəl mətbəx mebeli',
            'Qarderob',
            'Dəhliz mebeli',
            'Kupe dolab',
          ].map((label: string) => (
            <Badge
              key={label}
              className={styles.solutionsBadge}
            >
              {label}
            </Badge>
          ))}
        </div>
      </div>

      <div className={styles.infoBlocksWrapper}>
        {infoBlocks?.map((block: InfoBlock) => (
          <div
            key={block.title}
            className={styles.infoBlock}
          >
            <h5 className={styles.infoBlockTitle}>{block.title}</h5>
            <p className={styles.infoBlockContent}>{block.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}
