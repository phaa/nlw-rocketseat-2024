import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300],
  },
  title: {
    color: colors.gray[600],
    fontSize: 18,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    marginBottom: 16,
  },
})