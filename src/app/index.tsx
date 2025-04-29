import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';

// Componentes
import { Steps } from '@/components/steps';
import { Button } from '@/components/button';
import { Welcome } from '@/components/welcome';

const Index = () => {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />

      <Button onPress={() => router.navigate('/home')}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 40
  },
});

export default Index;