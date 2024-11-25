import { ProjectDetails } from '~ek/components'
import type { Language, ProjectEntry } from '~ek/types'
import { transformToUiData } from '~ek/utils'

const mockProject: ProjectEntry<Language> = {
  id: 1,
  title: {
    en: 'title EN',
    az: 'title',
    ru: 'title RU',
  },
  slug: {
    en: 'title-en',
    az: 'title',
    ru: 'title-ru',
  },
  content: {
    en: '<p>Is your kitchen furniture old, and do you want to replace it with new, modern kitchen furniture? Or are you moving to a new house and researching the latest kitchen furniture models?</p><p>Regardless of the reason, you must pay attention to these 6 points when choosing kitchen furniture.</p>',
    az: '<p>Mətbəx mebeliniz köhnəlib və yeni, müasir mətbəx mebeli ilə əvəz etmək istəyirsiniz? Vəya yeni bir evə köçürsünüz və son model mətbəx mebellərini araşdırırsınız?&nbsp;<br>&nbsp;</p><p>\r\n\r\nSəbəbindən asılı olmayaraq mətbəx mebelini seçən zaman mütləq bu 6 məqama diqqət yetirmək lazımdır.</p>',
    ru: '<p>Ваша кухонная мебель устарела, и вы хотите заменить её новой, современной кухонной мебелью? Или вы переезжаете в новый дом и исследуете последние модели кухонной мебели?</p><p>Независимо от причины, при выборе кухонной мебели обязательно обратите внимание на эти 6 моментов.</p>',
  },
  tags: {
    az: ['Yeni'],
    en: ['New'],
    ru: ['Новый'],
  },
  images: [
    {
      name: '0L1A5736',
      file_name: '0L1A5736.JPG',
      uuid: '91929660-d21d-45f4-bf57-ba4843d608c8',
      preview_url: '',
      original_url: 'https://embakitchen.kvadrat.az/storage/156/0L1A5736.JPG',
      order: 1,
      custom_properties: [],
      extension: 'JPG',
      size: 7043050,
    },
  ],
  status: true,
}

export default function ProjectDetailsPage({
  params: { locale },
}: Readonly<PageProps>): React.ReactElement {
  const projectDetailsProps = transformToUiData(
    mockProject,
    locale,
  ) as ProjectEntry

  return <ProjectDetails {...projectDetailsProps} />
}
