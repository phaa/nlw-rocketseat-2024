import { View, Text } from 'react-native';
import { 
  IconPhone, 
  IconMapPin, 
  IconTicket 
} from '@tabler/icons-react-native';

// Componentes
import { Info } from '../info';

// Estilos
import { styles } from './styles';

// Interfaces
import { DetailsProps } from './details.interface';

export const Details = ({ data }: DetailsProps) => {

  const getCouponsText = (coupons: number) => {
    if (coupons === 0) return 'Nenhum cupom disponível';
    else if (coupons == 1) return '1 cupom disponível';
    else return coupons + ' cupons disponíveis';
  }

  return (
    <View style={styles.container}>

      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>
        <Info
          icon={IconTicket}
          description={getCouponsText(data.coupons)}
        />
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>

      <View style={styles.group}>
        <Text style={styles.title}>Regulamento</Text>
        {data.rules?.map((item) => (
          <Text key={item.id} style={styles.rule}>
            {`\u2022 ${item.description}`}
          </Text>
        ))}
      </View>
    </View>
  )
}