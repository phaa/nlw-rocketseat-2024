
import { CategoryDTO } from '@/types/category.interface'

export interface CategoriesProps {
  data: CategoryDTO[];
  selected: string;
  onSelect: (id: string) => void;
}