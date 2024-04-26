import axios from 'axios'
import { UseQueryResult, useQuery } from 'react-query'
import { isUndefined } from 'lodash'

const FETCH_RETRIES = 3

export interface ProductModel {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

interface AggregatedInstallationQuery {
  products: UseQueryResult<ProductModel[]>
}

export function useFakeProducts(
): AggregatedInstallationQuery & { isLoading: boolean } {

  const authAxios = axios.create({
    baseURL: "https://fakestoreapi.com",
  })

  authAxios.interceptors.response.use(
    response => response,
    async function (error) {
      const originalRequest = error.config
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        try {
          return authAxios(originalRequest)
        } catch (error) {
          // TODO 
        }
      }
      return Promise.reject(error)
    }
  )

  const getProducts = async (): Promise<ProductModel[]> =>
    authAxios.get<ProductModel[]>(`/products`).then(res => res.data)


  const products = useQuery({
    queryKey: ['prodcuts', 'some_prodcuts'],
    queryFn: getProducts,
    enabled: true,
    retry: FETCH_RETRIES,
  })


  const dataIsFetched = isUndefined(products.data)
  return {
    products,
    isLoading: !dataIsFetched,
  }
}