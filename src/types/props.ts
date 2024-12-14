// THIS FILE IS USED TO DECLARE PAGES' AND COMPONENTS' REUSABLE PROPS
import type {
  AboutInfoBlock,
  AboutPageResponse,
  BlogEntry,
  BlogsPageResponse,
  BlogsResponse,
  CampaignEntry,
  CampaignsResponse,
  HomepageResponse,
  MediaFile,
  // PartnersSliderEntry,
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
  // campaigns: CampaignEntry[]
}

export interface CampaignDetailsProps extends SharedProps {}

export interface ProductCategoryProps extends SharedProps {
  products: ProductEntry[]
}

export interface ProductDetailsProps extends SharedProps {}

type OmittedHomepageResponse = Omit<
  HomepageResponse<string>,
  'id' | 'createOrderImage' | 'styleImage' | 'video'
>
type OmittedCampaignEntry = Omit<CampaignEntry<string>, 'image'>
export interface ModifiedCampaignEntry extends OmittedCampaignEntry {
  image: MediaFile
}

type OmittedBlogEntry = Omit<
  BlogEntry<string>,
  'content' | 'image' | 'similar_posts'
>
interface ModifiedBlogEntry extends OmittedBlogEntry {
  image: MediaFile
}
export interface HomeProps extends OmittedHomepageResponse {
  createOrderImage: MediaFile
  styleImage: MediaFile
  video: MediaFile
  campaigns: ModifiedCampaignEntry[]
  blogs: ModifiedBlogEntry[]
  popularBlogs: ModifiedBlogEntry[]
}
