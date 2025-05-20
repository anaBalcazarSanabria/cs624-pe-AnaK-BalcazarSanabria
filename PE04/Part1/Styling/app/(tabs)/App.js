import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/user.png')}
          />
        </View>
        <View style={styles.profileDetailsContainer}> {/* Container for name and occupation */}
          <Text style={styles.cardName}>
            John Doe
          </Text>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              React Native Developer
            </Text>
          </View>
        </View>
        <Text style={styles.cardDescription}>
          John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.
        </Text>
      </View>
    </View>
  );
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Optional background color for the whole screen
  },
  profileCard: {
    backgroundColor: profileCardColor,
    width: 300,
    height: 500,
    borderRadius: 10,
    paddingTop: 70, // Add padding to move content below the circle
    alignItems: 'center',
    borderWidth: 2,       // Optional border
    borderColor: 'black', // Optional border color
  },
  profileImageContainer: {
    position: 'absolute', // To overlap the card
    top: 20,             // Adjust to position the circle
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileDetailsContainer: {
    marginTop: 36, // Add space below the image circle
    alignItems: 'center',
    padding: 10, // Add some padding around the name and occupation
  },
  cardName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white', // Set the text color to be visible
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 1, // Reduced border width
    paddingBottom: 5,
    marginTop: 5,
  },
  cardOccupation: {
    fontSize: 16,
    color: 'black',
  },
  cardDescription: {
    marginTop: 20,
    marginHorizontal: 20,
    color: 'black',
    textAlign: 'center',
  }
});