import { Text, View } from "react-native";

// Estilos 
import { styles } from "./styles";
import { colors } from "@/styles/theme";

// Interfaces 
import { InfoProps } from "./info.interface";

export const Info = ({ icon: Icon, description }: InfoProps) => {
  return (
    <View style={styles.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}