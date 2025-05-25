import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Modal,
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
const DataList = [
  {
    key: 1,
    title: "Item 1",
  },
  {
    key: 2,
    title: "Item 2",
  },
  {
    key: 3,
    title: "Item 3",
  },
];
const DataSection = [
  {
    key: 1,
    title: "Item 1",
    data: ["Item 1-1", "Item 1-2", "Item 1-3"],
  },
  {
    key: 2,
    title: "Item 2",
    data: ["Item 2-1", "Item 2-2", "Item 2-3"],
  },
  {
    key: 3,
    title: "Item 3",
    data: ["Item 3-1", "Item 3-2", "Item 3-3"],
  },
];
export default function Index() {
  const [shoModal, setShoModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
  };

  const onClick = () => {
    // Use just one of the Toast or Alert or Modal
    setShoModal(true);
    Alert.alert(
      "Hello world!",
      "This is an Alert usage",
      [
        { text: "Ok", style: "default" },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
    ToastAndroid.showWithGravity(
      "Clicked successfully!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Click" onPress={onClick} />
      <Modal
        visible={shoModal}
        onRequestClose={() => setShoModal(false)}
        animationType="slide"
      >
        <View style={styles.centred_view}>
          <View style={styles.modal}>
            <Text>This is A Modal for Create a new Things</Text>
          </View>
        </View>
      </Modal>
      <FlatList
        data={DataList}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <SectionList
        sections={DataSection}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centred_view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
