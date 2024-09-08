import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image, Dimensions, Animated, StyleSheet, Text } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', image: require("./assets/intro1.png"), text: 
  <View>
    <Text style={{fontSize: 24, color: "#30564e", fontWeight: "600",}}>Aplikasi Klinik</Text>
    <Text style={{fontSize: 24, color: "#30564e", fontWeight: "600",}}>Resmi <Text style={{color: "#f9b341"}}>Satu Sehat</Text></Text>
    <Text style={{fontSize: 24, color: "#30564e", fontWeight: "600",}}>Mulai dari Rp.150.000</Text>
  </View>
 },


  { id: '2', image: require("./assets/intro2.png"), text:
    <View>
    <Text style={{fontSize: 24, color: "#30564e", fontWeight: "600",}}>Terkoneksi Dengan</Text>
    <Text style={{fontSize: 24, color: "#30564e", fontWeight: "600",}}> <Text style={{color: "#f9b341"}}>Satu Sehat{" "}</Text>Tanpa Ribet</Text>
  </View>
   },


  { id: '3', image: require("./assets/intro3.png"), text:
    <View>
    <Text style={{fontSize: 24, color: "#30564e", fontWeight: "600",}}><Text style={{color: "#f9b341"}}>Satu Klinik{" "}</Text>Untuk</Text>
    <Text style={{fontSize: 24, color: "#30564e", fontWeight: "600",}}>Semua Kebutuhan</Text>
    <Text style={{fontSize: 24, color: "#30564e", fontWeight: "600",}}>Manajemen Klinik Anda</Text>
  </View> 
  },
];

const Carousel: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoScroll = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= data.length) {
      nextIndex = 0;
    }

    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      autoScroll();
    }, 3000); // Auto-swipe interval

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }: { item: { id: string; image: any; text: JSX.Element } }) => (
    <View style={styles.imageContainer}>
      <View style={{ marginTop: 36, marginLeft: 20 }}>
        {item.text}
      </View>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        ref={flatListRef}
      />
      <View style={styles.indicatorContainer}>
  {data.map((_, index) => {
    const scale = scrollX.interpolate({
      inputRange: [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
      ],
      outputRange: [0.8, 1.2, 0.8],
      extrapolate: 'clamp',
    });

    const backgroundColor = scrollX.interpolate({
      inputRange: [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
      ],
      outputRange: ['#d3d3d3', '#30564e', '#d3d3d3'], // light gray to tomato and back
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        key={index.toString()}
        style={[
          styles.indicator,
          { transform: [{ scale }], backgroundColor },
        ]}
      />
    );
  })}
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textBig: {
    fontSize: 24,
    color: "#30564e",
    fontWeight: "600",
  },
  textBigYellow: {
    fontSize: 24,
    color: "#f9b341",
    fontWeight: "600",
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 10,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
});

export default Carousel;
