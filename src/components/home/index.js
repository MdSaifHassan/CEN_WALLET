import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

    function HomeScreen({ navigation }) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>
        );
      }
export default HomeScreen;
const styles = StyleSheet.create({})
