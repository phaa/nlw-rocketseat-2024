import { Text, View } from "react-native";

// Estilização
import { colors } from "@/styles/theme";
import { styles } from "./styles";

// Interfaces
import { IStepProps } from "./interfaces";

export const Step = ({
  title,
  description,
  icon: Icon // alias
}: IStepProps) => {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}