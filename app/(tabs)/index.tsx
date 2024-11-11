import React from 'react';
import { Image, Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import RegisterForm from '../../components/Authentication/RegisterForm';
import LoginForm from "@/components/Authentication/LoginForm";

export default function HomeScreen() {
    const [Register, setRegister] = React.useState(false);
    const [Login, setLogin] = React.useState(false);

    const showLoginForm = () => {
        setLogin(true);
        setRegister(false);
    };

    const showRegisterForm = () => {
        setRegister(true);
        setLogin(false);
    };

    return (
        <SafeAreaView className="flex-1 bg-primary items-center justify-center">
            <Image className="mb-5" source={require('../../assets/images/react-logo.png')} />
            <Text className="text-4xl text-center text-white font-bold">Welcome to the {'\n'} OwO chat</Text>
            <Text className="text-lg text-center mb-10 text-white">The true and free conversation</Text>

            <View className="mb-20">
                {Register === true ? <RegisterForm/> : null}
                {Login === true ? <LoginForm /> : null}
            </View>

            <View className="flex flex-row justify-center items-center mt-10">
                <TouchableOpacity
                    className={`px-6 py-3 mx-10 rounded-lg ${Login ? 'bg-gray-400' : 'bg-tertiary'}`}
                    onPress={() => showLoginForm()}
                    disabled={Login}
                >
                    <Text className={`text-center font-semibold ${Login ? 'text-gray-600' : 'text-black'}`}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className={`px-6 py-3 mx-10 rounded-lg ${Register ? 'bg-gray-400' : 'bg-tertiary'}`}
                    onPress={() => showRegisterForm()}
                    disabled={Register}
                >
                    <Text className={`text-center font-semibold ${Register ? 'text-gray-600' : 'text-black'}`}>
                        SIGN UP
                    </Text>
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
