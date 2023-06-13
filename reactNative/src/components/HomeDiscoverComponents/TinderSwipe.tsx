import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: ScreenWidth * 0.9,
    height: ScreenHeight * 0.5,
    // backgroundColor: 'white',
  },
  card: {
    borderRadius: 5,
    borderColor: '#E8E8E8',
    backgroundColor: 'white',
    width: ScreenWidth * 0.9,
    height: ScreenHeight * 0.5,
  },
  image: {
    width: ScreenWidth * 0.9, // 50% of the screen width
    height: ScreenHeight * 0.5, // 30% of the screen height
    backgroundColor: 'white',
  },
});

type CardType = {
  id: number;
  image: any;
};

export function TinderSwipe() {
  const [swipedCards, setSwipedCards] = useState<CardType[]>([]);

  const cards = [
    {id: 1, image: require('../../assets/img/mui.jpeg')},
    {id: 2, image: require('../../assets/img/day.jpeg')},
    {id: 3, image: require('../../assets/img/ivy.jpeg')},
    {id: 4, image: require('../../assets/img/edan.jpeg')},
    {id: 4, image: require('../../assets/img/stanley.jpeg')},
  ];

  const handleSwipeRight = () => {
    console.log('swipe right');
  };

  const handleSwipeLeft = () => {
    console.log('swipe left');
  };
  const handleSwipeAll = () => {
    console.log('all images are shown');
  };

  return (
    <View style={styles.container}>
      {swipedCards.length === 5 ? (
        <Text>All cards swiped!</Text>
      ) : (
        <Swiper
          cards={cards}
          stackSize={2}
          cardIndex={0}
          backgroundColor='#FFF9F0'
          renderCard={card => (
            <Animated.View style={[styles.card]}>
              <Image source={card.image} style={styles.card} />
            </Animated.View>
          )}
          onSwipedRight={handleSwipeRight}
          onSwipedLeft={handleSwipeLeft}
          onSwipedAll={handleSwipeAll}
        />
      )}
    </View>
  );
}
