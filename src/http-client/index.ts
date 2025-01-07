import axios, {
  AxiosError,
  type AxiosResponse,
  type AxiosInstance,
} from 'axios'

interface Params {
  status?: boolean
  page?: number
  perPage?: number
}

interface HttpClient {
  get: <T>(endpoint: string, params?: Params) => Promise<T | undefined>
  post: <T, V>(endpoint: string, body: V) => Promise<T | undefined>
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

export const httpClient: HttpClient = {
  async get<T>(endpoint: string, params?: Params): Promise<T | undefined> {
    const token = localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token') as string)
      : ''

    try {
      const response: AxiosResponse<T> = await axiosInstance.get(endpoint, {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        // console.log(e.response?.data.message)
      }
    }
  },

  async post<T, V>(endpoint: string, body: V): Promise<T | undefined> {
    const token = localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token') as string)
      : ''

    try {
      const response: AxiosResponse<T> = await axiosInstance.post(
        endpoint,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      return response.data
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        if (typeof e.response?.data.error === 'string') {
          throw new Error(e.response?.data.error)
        } else {
          throw new Error(Object.values(e.response?.data.error).join('\n'))
        }
      }
    }
  },
}
