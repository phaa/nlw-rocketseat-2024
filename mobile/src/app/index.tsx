import { View, StyleSheet } from "react-native";

// Componentes
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";

const Index = () => {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps/>
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