import { ENDPOINTS } from "../constants/api-endpoints";
import { GET } from "./api";

export const getAllArticles = () => GET<Article[]>(ENDPOINTS.getArticles)