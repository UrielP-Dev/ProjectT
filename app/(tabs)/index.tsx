import React from 'react';
import { Image, Text, SafeAreaView, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
      <SafeAreaView className="flex-1 bg-primary items-center justify-center">
        <Image className="mb-20" source={require('../../assets/images/react-logo.png')} />
        <Text className="text-4xl text-center mt-20 text-white font-bold">Welcome to the {'\n'} OwO chat</Text>
        <Text className="text-lg text-center mb-5 text-white">The true and free conversation</Text>

        <View className="flex flex-row justify-center items-center mt-10">
          <TouchableOpacity className="bg-tertiary px-6 py-3 mx-10 rounded-lg">
            <Text className="text-center text-black font-semibold">LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-tertiary px-6 py-3 mx-10 rounded-lg">
            <Text className="text-center text-black font-semibold">SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <View className='mt-20 mb-0'>
          <TouchableOpacity>
            <Text className='font-bold text-white'>
              How is OwO chat?
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}
