import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {

    const navigation = useNavigation();
    
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: '20%',
        }}
      >
        Settings Screen
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={{
          backgroundColor: 'purple',
          padding: 10,
          marginTop: '20%',
          width: '50%',
          alignSelf: 'center',
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: '#fff',
          }}
        >
          Go to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
