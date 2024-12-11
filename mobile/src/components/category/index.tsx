import { 
  Text, 
  Pressable,
} from 'react-native';

// Estilos
import { styles } from './styles';
import { colors } from '@/styles/theme';

// Interface
import { CategoryProps } from './category.interface';

// Utils
import { categoriesIcons } from '@/utils/categories-icons';

export const Category = ({ 
  name, 
  iconId, 
  isSelected = false, 
  ...rest 
}: CategoryProps) =>  {
  const Icon = categoriesIcons[iconId];
  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>{name}</Text>
    </Pressable>
  );
}