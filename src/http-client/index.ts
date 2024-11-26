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
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://embakitchen.kvadrat.az/api',
})

export const httpClient: HttpClient = {
  async get<T>(endpoint: string, params?: Params): Promise<T | undefined> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get(endpoint, {
        params,
      })

      return response.data
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        // console.log(e.response?.data.message)
      }
    }
  },
}
