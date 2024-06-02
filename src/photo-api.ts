import axios, { AxiosResponse } from 'axios';


axios.defaults.baseURL = "https://api.unsplash.com/search/photos";


const API_KEY = "cmAs6HtxbjC6lEDZMzpFFT7STM7v19ZxoddFTchLnas";


interface ImageResult {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
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