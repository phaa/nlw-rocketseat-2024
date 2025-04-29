import { PressableProps } from 'react-native';

export interface CategoryProps extends PressableProps {
  name: string
  iconId: string
  isSelected?: boolean
}