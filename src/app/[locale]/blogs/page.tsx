import { useTranslations } from 'next-intl'
import { Blogs } from '~ek/components'
import blogsPageBanner from '/public/assets/images/blogs-page-banner.jpg'
// import mockBlogImg from '/public/assets/images/mock-blog-img.jpg'

// const projects: Partial<ProjectEntry>[] = Array(9)
//   .fill([
//     {
//       title: 'Not an expert? Not a problem. Here’s why.',
//       content:
//         'Worried about teaching or leading because you’re not an ‘expert’? Research says that’s an advantage. Learn how to leverage your inexperience for better products.',
//       img: mockBlogImg,
//     },
//   ])
//   .flat()

export default function BlogsPage(): React.ReactElement {
  const t = useTranslations('blogsPage')

  const blogsProps = {
    banner: {
      title: t('title'),
      image: blogsPageBanner,
    },
  }

  return <Blogs {...blogsProps} />
}
