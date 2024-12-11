import { api } from '../index';
import { PlaceDTO } from '@/types/place.interface';

export const PlaceService = {
  async getPlaces() {
    return api.get<PlaceDTO[]>('/markets/' );
  },

  async getPlaceById(id: number) {
    return api.get<PlaceDTO>(`/users/${id}`);
  },

  /* async createUser(userData: Omit<PlaceDTO, 'id'>) {
    return api.post<PlaceDTO>('/users', userData);
  } */
};