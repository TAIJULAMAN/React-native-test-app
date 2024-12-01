import { Text, View, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.tab1}>
        <Image
          source={require("../../assets/images/Oval.png")}
          style={styles.reactLogo}
        />
        <View style={styles.text}>
          <Text
            style={{
              color: "black",
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            Md Shah Aman Patwary
          </Text>
          <Text
            style={{
              color: "#13e8e4",
            }}
          >
            @aman
          </Text>
          <Text
            style={{
              color: "#bdc3c7",
              fontSize: 16,
              marginTop: 5,
            }}
          >
            Joined 25 jan 2011
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.about}>About Me!</Text>
        <Text style={styles.tab2}>
          Lorem ipsum dolor sit amet conse adipi elit. Quia disti commodi,
          excepturi debitis deleniti quis susc veniam. Lorem ipsum dolor sit
          amet conse adipi elit. Quia disti commodi, excepturi debitis deleniti
          quis susc veniam. Lorem ipsum dolor sit amet conse adipi elit.Lorem
          ipsum dolor sit amet conse adipi elit.
        </Text>
      </View>
      <View style={styles.tab3}>
        <View style={styles.stat}>
          <Text style={styles.number}>Repos</Text>
          <Text style={styles.name}>8</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.number}>Followers</Text>
          <Text style={styles.name}>3938</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.number}>Following</Text>
          <Text style={styles.name}>9</Text>
        </View>
      </View>
      <View style={{ marginTop: 40, flexDirection: "column", gap: 20 }}>
        <View style={styles.loc}>
          <View>
            <Image source={require("../../assets/images/003-pin.png")} />
          </View>
          <Text style={{ fontSize: 25, fontWeight: 400 }}>
            Dhaka,Bangladesh
          </Text>
        </View>
        <View style={styles.loc}>
          <View>
            <Image source={require("../../assets/images/002-url.png")} />
          </View>
          <Text style={{ fontSize: 20, color: "#a6acaf" }}>
            https://github.com/TAIJULAMAN
          </Text>
        </View>
        <View style={styles.loc}>
          <View>
            <Image source={require("../../assets/images/004-twitter.png")} />
          </View>
          <Text style={{ fontSize: 25, fontWeight: 400 }}>Not available</Text>
        </View>
        <View style={styles.loc}>
          <View>
            <Image
              source={require("../../assets/images/001-office-building.png")}
            />
          </View>
          <Text style={{ fontSize: 25, fontWeight: 400 }}>Home Office</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 100,
    paddingHorizontal: 40,
    flex: 1,
  },
  loc: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#a6acaf",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
    alignSelf: "center",
  },
  about: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,

    color: "#a6acaf",
  },
  number: {
    color: "#a6acaf",
  },
  tab3: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    color: "#a6acaf",
    backgroundColor: "#f5f6fa",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  stat: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tab1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tab2: {
    marginTop: 10,
    fontSize: 16,
    color: "#a6acaf",
  },
  reactLogo: {
    height: 80,
    width: 80,
  },
  text: {
    marginLeft: 20,
  },
});
