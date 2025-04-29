import { TouchableOpacityProps } from 'react-native';

import { PlaceDTO } from '@/types/place.interface';

export interface PlaceProps extends TouchableOpacityProps {
  data: PlaceDTO;
}
