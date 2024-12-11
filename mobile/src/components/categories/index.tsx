import { FlatList } from 'react-native';

// Componentes
import { Category } from '../category';

// Estilos
import { styles } from './styles';

// Interfaces
import { CategoriesProps } from './categories.interface'

export const Categories = ({ 
  data, 
  selected, 
  onSelect 
}: CategoriesProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  )
}