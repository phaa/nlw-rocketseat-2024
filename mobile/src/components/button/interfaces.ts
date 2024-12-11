import { TouchableOpacityProps } from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

export interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
}

export interface IconProps {
  icon: React.ComponentType<TablerIconProps>;
}