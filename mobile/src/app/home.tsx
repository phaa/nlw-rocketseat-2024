import { useEffect, useState } from "react";
import { View, Alert, StyleSheet } from "react-native";

// Services
import { api } from "@/services/api";
import { Places } from "@/components/places";
import { PlaceDTO } from "@/types/place.interface";

// Components
import { Categories, CategoriesProps } from "@/components/categories";

type MarketsProps = PlaceProps;

const Home = () => {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);
  
  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } 
    catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.");
    }
  }
  
  const fetchMarkets = async () => {
    try {
      if (!category) return;
      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
    } 
    catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possível carregar os locais.");
    }
  }
  
  useEffect(() => {
    fetchCategories();
  }, []);
  
  useEffect(() => {
    fetchMarkets();
  }, [category]);
  
  return (
    <View style={styles.container}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
      <Places data={markets} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CECECE"
  },
});

export default Home;