// Libraries
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/Ionicons";

// Constants
import COLORS from "../constants/colors";

const WebViewScreen = ({ route, navigation }) => {
  const url = route.params.url;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: COLORS.primary100,
      },
      headerLeft: () => (
        <Icon
          name="arrow-back"
          color={COLORS.gray700}
          size={22}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  return (
    <>
      <WebView source={{ uri: url }} style={styles.container} />
    </>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
