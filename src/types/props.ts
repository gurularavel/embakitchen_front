// THIS FILE IS USED TO DECLARE PAGES' AND COMPONENTS' REUSABLE PROPS
import type {
  AboutInfoBlock,
  AboutPageResponse,
  BlogEntry,
  BlogsPageResponse,
  BlogsResponse,
  CampaignEntry,
  MediaFile,
  ProductEntry,
  ProjectEntry,
} from '~ek/types'

export interface BannerProps {
  title: string
  image: MediaFile
}

export interface SharedProps extends BannerProps {}

type OmittedAboutPageResponse = Omit<
  AboutPageResponse<string>,
  'id' | 'image' | 'video'
>
export interface AboutProps extends OmittedAboutPageResponse {
  image: MediaFile
  video?: MediaFile
  aboutInfoBlocks: AboutInfoBlock<string>[]
}

export interface ProjectsProps extends SharedProps {
  projects: Omit<ProjectEntry, 'content'>[]
}

type OmittedBlogsPageResponse = Omit<BlogsPageResponse<string>, 'id' | 'image'>
export interface BlogsProps extends OmittedBlogsPageResponse {
  image: MediaFile
  blogs: BlogsResponse<string>['data']
}

type OmittedBlogDetailsResponse = Omit<
  BlogEntry<string>,
  'id' | 'image' | 'status' | 'similar_posts'
>
export interface BlogDetailsProps extends OmittedBlogDetailsResponse {
  image: MediaFile
  similar_posts: Omit<BlogDetailsProps, 'content'>[]
}

export interface CampaignsProps extends SharedProps {
  campaigns: CampaignEntry[]
}

export interface CampaignDetailsProps extends SharedProps {}

export interface ProductCategoryProps extends SharedProps {
  products: ProductEntry[]
}

export interface ProductDetailsProps extends SharedProps {}

export interface HomeProps {}
