import {Text, TextInput, TouchableOpacity, View} from "react-native";
import React, { useState } from "react";

export const LoginForm = () => {
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);

    return (
        <View className="flex justify-center items-center gap-5">
            <TextInput
                className={`border-2 text-center w-80 rounded-full border-white ${
                    isFocusedEmail ? 'bg-tertiary' : ''
                } text-white h-12`}
                placeholder="Email"
                placeholderTextColor="white"
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => setIsFocusedEmail(false)}
            />

            <TextInput
                className={`border-2 text-center w-80 rounded-full border-white ${
                    isFocusedEmail ? 'bg-tertiary' : ''
                } text-white h-12`}
                placeholder="Password"
                placeholderTextColor="white"
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
            />

            <TouchableOpacity
                className="
        border-2
        justify-center
        w-80
        rounded-full
        items-center
        bg-tertiary
        h-16
        shadow-lg">
                <Text className='text-black font-semibold'>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginForm;
