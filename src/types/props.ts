// THIS FILE IS USED TO DECLARE REUSABLE PAGES' AND COMPONENTS' PROPS
import type {
  AboutInfoBlock,
  BlogEntry,
  MediaFile,
  ProjectEntry,
} from '~ek/types'

export interface BannerProps {
  title: string
  image: MediaFile
}

export interface SharedProps {
  banner: BannerProps
}

export interface AboutProps extends SharedProps {
  description: string
  video?: MediaFile
  infoBlocks: AboutInfoBlock[]
}

export interface ProjectsProps extends SharedProps {
  projects: Omit<ProjectEntry, 'content'>[]
}

export interface BlogsProps extends SharedProps {
  blogs: BlogEntry[]
}
