import { Text, View } from 'react-native';
import { IconTicket } from '@tabler/icons-react-native';

// Estilos
import { styles } from './styles';
import { colors } from '@/styles/theme';

// Interfaces
import { CouponProps } from './coupon.interface';

export const Coupon = ({ code }: CouponProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilize esse cupom</Text>
      <View style={styles.content}>
        <IconTicket size={24} color={colors.green.light} />
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  )
}