import axios, { AxiosResponse } from 'axios';


axios.defaults.baseURL = "https://api.unsplash.com/search/photos";


const API_KEY = "cmAs6HtxbjC6lEDZMzpFFT7STM7v19ZxoddFTchLnas";

export interface User {
  name: string;
}

export interface Urls {
  small: string;
  regular: string;
}

export interface ImageResult {
  id: string;
  alt_description: string;
  urls: Urls;
  likes: number;
  user: User;
}

interface FetchImagesResponse {
  results: ImageResult[];
}


export const fetchImages = async (currentPage: number, searchQuery: string): Promise<ImageResult[]> => {
  const response: AxiosResponse<FetchImagesResponse> = await axios.get("", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 8,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });

  return response.data.results;
};