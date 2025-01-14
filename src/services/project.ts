import { httpClient } from '~ek/http-client'
import type {
  ProjectEntry,
  ProjectsPageResponse,
  ProjectsResponse,
} from '~ek/types'

export async function getProjectsPageContent(): Promise<ProjectsPageResponse> {
  const response = await httpClient.get<ProjectsPageResponse>('/projects-page')

  return response as ProjectsPageResponse
}

export async function getProjects(
  apiQueryParams: ApiQueryParams,
): Promise<ProjectsResponse['data']> {
  const response = await httpClient.get<ProjectsResponse>(
    '/projects',
    apiQueryParams,
  )

  return response?.data as ProjectsResponse['data']
}

export async function getProjectDetails(slug: string): Promise<ProjectEntry> {
  const response = await httpClient.get<ProjectEntry>(`/projects/${slug}`)

  return response as ProjectEntry
}
