import { ComponentType } from 'react';
import { IconProps } from '@tabler/icons-react-native';

export interface StepProps {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}