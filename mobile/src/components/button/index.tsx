import {
  TouchableOpacity,
  Text,
  TextProps,
  ActivityIndicator,
} from "react-native";

// Estilos
import { styles } from "./styles";
import { colors } from "@/styles/theme";

// Interfaces
import { ButtonProps, IconProps } from "./interfaces";

const Button = ({
  children,
  style,
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const Title = ({ children }: TextProps) => {
  return <Text style={styles.title}>{children}</Text>
}

const Icon = ({ icon: Icon }: IconProps) => {
  return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };