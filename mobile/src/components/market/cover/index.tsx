import { ImageBackground, View } from 'react-native';
import { IconArrowLeft } from '@tabler/icons-react-native';
import { router } from 'expo-router';

// Estilos
import { styles } from './styles';

// Componentes
import { Button } from '@/components/button';

// Interfaces
import { CoverProps } from './cover.interface';

export const Cover = ({ uri }: CoverProps) => {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button
          style={{ width: 40, height: 40 }}
          onPress={() => router.back()}
        >
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  )
}