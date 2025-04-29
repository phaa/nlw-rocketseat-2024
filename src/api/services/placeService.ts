import { apiClient } from '../index';
import { PlaceDTO } from '@/types/place.interface';

export const PlaceService = {
  async getPlacesByCategory(category: string) {
    const url = '/markets/category/' + category;
    const places = await apiClient.get<PlaceDTO[]>(url);
    return places;
  },
  async getPlaceById(id: string) {
    const url = '/markets/' + id;
    const places = await apiClient.get<PlaceDTO>(url);
    return places;
  }
};