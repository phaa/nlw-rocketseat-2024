import { apiClient } from '../index';
import { CategoryDTO } from '@/types/category.interface';

export const CategoryService = {
  async getCategories() {
    const url = '/categories';
    const categories = await apiClient.get<CategoryDTO[]>(url);
    return categories;
  }
};