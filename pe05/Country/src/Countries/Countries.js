import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
  static navigationOptions = {
    title: 'Countries',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    },
  };


  render() {
    const { countries } = this.props;
    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {!countries.length && <CenterMessage message="No saved countries!" />}
          {countries.map((item, index) => (
            <View style={styles.countryContainer} key={index}>
                <Text style={styles.country}>{item.countryName}</Text>
                <Text style={styles.country}>{item.currency}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  coutry: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
});