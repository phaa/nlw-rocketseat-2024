import { useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

// Services
import { CategoryService, PlaceService } from '@/api/services';

// Components
import { Categories } from '@/components/categories';
import { Places } from '@/components/places';

// Estilos
import { colors, fontFamily } from '@/styles/theme';

// Interfaces
import { CategoryDTO } from '@/types/category.interface';
import { PlaceDTO } from '@/types/place.interface';

// Constantes
const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
}

const Home = () => {
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [category, setCategory] = useState('');
  const [places, setPlaces] = useState<PlaceDTO[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesData = await CategoryService.getCategories();
      setCategories(categoriesData);
      setCategory(categoriesData[0].id);
    }
    catch (error) {
      console.log(error);
      Alert.alert('Categorias', 'Não foi possível carregar as categorias.');
    }
  }

  const fetchMarkets = async () => {
    try {
      if (!category) return;
      const placesData = await PlaceService.getPlacesByCategory(category);
      setPlaces(placesData);
    }
    catch (error) {
      console.log(error);
      Alert.alert('Locais', 'Não foi possível carregar os locais.');
    }
  }

  const fetchCurrentLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted) {
        const location = await Location.getCurrentPositionAsync();
      }
    } 
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //fetchCurrentLocation();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <View style={styles.container}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier='current'
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require('@/assets/location.png')}
        />
        {places.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require('@/assets/pin.png')}
          >
            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[600],
                    fontFamily: fontFamily.medium,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.gray[600],
                    fontFamily: fontFamily.regular,
                  }}
                >
                  {item.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Places data={places} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CECECE'
  },
});

export default Home;