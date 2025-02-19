import { StyleSheet, Text, View } from "react-native";

const [movieTitles, setMovieTitles] = useState([
  {
    name: "Back to the Future",
    image: require("./assets/images/Back to the Future.jpg"),
    rating: "7.5",
  },
  {
    name: "Batman",
    image: require("./assets/images/Batman '89.jpg"),
    rating: "7.5",
  },
  {
    name: "Spiderman: Across the Spiderverse",
    image: require("./assets/images/Across the Spiderverse.jpg"),
    rating: "8.0",
  },
  {
    name: "Lord of the Rings: Fellowship of the Ring",
    image: require("./assets/images/Lotr Fellowship of the Ring.jpg"),
    rating: "8.5",
  },
  {
    name: "Sky High",
    image: require("./assets/images/Sky High.jpg"),
    rating: "8.5",
  },
  {
    name: "Lord of the Rings: The Two Towers",
    image: require("./assets/images/Lotr The Two Towers.jpg"),  
    rating: "8.7",
  },
  {
    name: "Scott Pilgrim vs. The World",
    image: require("./assets/images/Scott Pilgrim.jpg"),
    rating: "8.9",
  },
  {
    name: "Lord of the Rings: Return of the King",
    image: require("./assets/images/Lotr Return of the King.jpg"),
    rating: "9.5",
  },
  {
    name: "Disney's Peter Pan",
    image: require("./assets/images/Peter Pan.jpg"),
    rating: "9.5",
  },
  {
    name: "Ferris Bueller's Day Off",
    image: require("./assets/images/Ferris Bueler's Day Off.jpg"),
    rating: "10.0",
  },
]);
export default function Page() {
  return (
    <>
    <StatusBar style="dark"/>
    <SafeAreaView style={styles.rootContainer}>
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top 10 Movies</Text>
      </View>
    </View>

    <View style={styles.listContainer}>
    <ScrollView>
      {MovieItems.map((itemData) => (<MoiveItem 
        name={itemData.name}
        image={itemData.image}
        rating={itemData.rating}
      />
      ))}
      
    </ScrollView>
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#01889F",
    alignItems: "center",
    padding: 24,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#01889F",
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
