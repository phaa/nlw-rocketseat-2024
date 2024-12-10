import { Stack } from "expo-router";

// Estilos
import { colors } from "@/styles/theme";

// Fontes
import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

// Componentes
import { Loading } from "@/components/loading";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading/>
  }

  return (
    <Stack 
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.gray[100]
        }
      }}
    />
  );
}

export default Layout;