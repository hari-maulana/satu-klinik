import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Animated, StyleSheet, Button, Dimensions } from "react-native";
import BusinessInfoScreen from "./BusinessInfoScreen";
import PinCreationScreen from "./PinCreationScreen";

const { width } = Dimensions.get("window");

const data = [
  {
    id: "1"
  },
  {
    id: "2",
  },
];

const Carousel: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const handleNextPress = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    }
  };

  const renderItem = ({ item }: { item: { id: string; e: JSX.Element } }) => (
    <View style={styles.imageContainer}>{item.e}</View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => {
          const scale = scrollX.interpolate({
            inputRange: [(index - 1) * width, index * width, (index + 1) * width],
            outputRange: [0.8, 1.2, 0.8],
            extrapolate: "clamp",
          });

          const backgroundColor = scrollX.interpolate({
            inputRange: [(index - 1) * width, index * width, (index + 1) * width],
            outputRange: ["#d3d3d3", "#30564e", "#d3d3d3"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[styles.indicator, { backgroundColor }]}
            />
          );
        })}
      </View>

      <FlatList
        ref={flatListRef}
        data={[
            { id: "1", e: <BusinessInfoScreen onButtonClick={handleNextPress} /> },
            { id: "2", e: <PinCreationScreen /> }
          ]}
        windowSize={2}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEnabled={false} // Disable manual scrolling
      />

      {/* {currentIndex === 0 && !isFormCompleted && (
        <Button title="Complete Form" onPress={() => setIsFormCompleted(true)} />
      )}

      {isFormCompleted && (
        <Button title="Next" onPress={handleNextPress} />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 48,
  },
  indicator: {
    height: 10,
    width: '45%',
    borderRadius: 5,
    backgroundColor: "#888",
    marginHorizontal: 5,
  },
});

export default Carousel;
