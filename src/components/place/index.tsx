import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { IconTicket } from '@tabler/icons-react-native';

// Estilos
import { styles } from './styles'
import { colors } from '@/styles/theme'

// Interfaces
import { PlaceProps } from './place.interface';

export const Place = ({ data, ...rest }: PlaceProps) => {
  
  const getCouponsText = (coupons: number) => {
    if (coupons === 0) return 'Nenhum cupom disponível';
    else if (coupons == 1) return '1 cupom disponível';
    else return coupons + ' cupons disponíveis';
  }

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={{ uri: data.cover }} />
      <View style={styles.content}>

        <Text style={styles.name}>
          {data.name}
        </Text>

        <Text style={styles.description}>
          {data.description}
        </Text>

        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}>
            {getCouponsText(data.coupons)}
          </Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}