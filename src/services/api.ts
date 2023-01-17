import axios, { AxiosResponse } from "axios";

export const GET = async <T>(endpoint: string): Promise<AxiosResponse<T>> =>
  getInstance().get(`${endpoint}`);

const getInstance = () => {
     const instance =  axios.create({
      baseURL: 'https://api.spaceflightnewsapi.net/v3'

    })
    return instance
}