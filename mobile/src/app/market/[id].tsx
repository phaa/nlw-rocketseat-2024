import { useEffect, useState, useRef } from 'react';
import {
  View,
  Alert,
  Modal,
  StatusBar,
  ScrollView
} from 'react-native';
import {
  router,
  useLocalSearchParams,
  Redirect
} from 'expo-router';
import { useCameraPermissions, CameraView } from 'expo-camera';

// Componentes
import { Button } from '@/components/button';
import { Loading } from '@/components/loading';
import { Cover } from '@/components/market/cover';
import { Coupon } from '@/components/market/coupon';
import { Details } from '@/components/market/details';

// Interfaces
import { PlaceDTO } from '@/types/place.interface';

// Services
import { PlaceService, CouponService } from '@/api/services';

const Market = () => {
  // Dados
  const [place, setPlace] = useState<PlaceDTO>();
  const [coupon, setCoupon] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [couponIsFetching, setCouponIsFetching] = useState(false);

  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false);
  const [_, requestPermission] = useCameraPermissions();

  const params = useLocalSearchParams<{ id: string }>();
  const qrLock = useRef(false);

  async function fetchMarket() {
    try {
      // Rules vai ser injetado aqui
      const places = await PlaceService.getPlaceById(params.id);
      setPlace(places);
      setIsLoading(false);
    }
    catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível carregar os dados', [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]);
    }
  }

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();
      if (!granted) {
        return Alert.alert('Câmera', 'Você precisa habilitar o uso da câmera');
      }
      qrLock.current = false;
      setIsVisibleCameraModal(true);
    }
    catch (error) {
      console.log(error)
      Alert.alert('Câmera', 'Não foi possível utilizar a câmera')
    }
  }

  const getCoupon = async (id: string) => {
    try {
      setCouponIsFetching(true);
      const coupon = await CouponService.getCouponById(id);
      Alert.alert('Cupom', coupon);
      setCoupon(coupon);
    }
    catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível utilizar o cupom');
    }
    finally {
      setCouponIsFetching(false);
    }
  }

  const handleUseCoupon = (id: string) => {
    setIsVisibleCameraModal(false);
    Alert.alert(
      'Cupom',
      'Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?',
      [
        { style: 'cancel', text: 'Não' },
        { text: 'Sim', onPress: () => getCoupon(id) },
      ]
    );
  }

  useEffect(() => {
    fetchMarket();
  }, [params.id, coupon]);

  if (isLoading) {
    return <Loading />;
  }

  if (!place) {
    return <Redirect href='/home' />;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' hidden={isVisibleCameraModal} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={place.cover} />
        <Details data={place} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing='back'
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true;
              setTimeout(() => handleUseCoupon(data), 500);
            }
          }}
        />
        <View style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
          <Button
            onPress={() => setIsVisibleCameraModal(false)}
            isLoading={couponIsFetching}
          >
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>

    </View>
  )
}

export default Market;