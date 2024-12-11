import { useRef } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

// Estilos
import { styles } from './styles';

// Componentes
import { Place } from '../place';

// Interfaces
import { PlacesProps } from './places.interface';
import { PlaceDTO } from '@/types/place.interface';

export function Places({ data }: PlacesProps) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  }

  const renderItem = (item: PlaceDTO) => {
    return (
      <Place
        data={item}
        onPress={() => router.navigate(`/market/${item.id}`)}
      />
    );
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={styles.title}>
            Explore locais perto de você
          </Text>
        )}
      />
    </BottomSheet>
  );
}