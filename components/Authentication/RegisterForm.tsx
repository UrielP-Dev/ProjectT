import { TextInput, View } from "react-native";
import React, { useState } from "react";

export const RegisterForm = () => {
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] = useState(false);

    return (
        <View className="flex justify-center items-center gap-5">
            <TextInput
                className={`border-2 text-center w-80 rounded-full ${
                    isFocusedEmail ? 'bg-tertiary' : ''
                }`}
                placeholder="Email"
                placeholderTextColor="white"
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => setIsFocusedEmail(false)}
            />
            <TextInput
                className={`border-2 text-center w-80 rounded-full ${
                    isFocusedPassword ? 'bg-tertiary' : ''
                }`}
                placeholder="Password"
                placeholderTextColor="white"
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
            />
            <TextInput
                className={`border-2 text-center w-80 rounded-full ${
                    isFocusedConfirmPassword ? 'bg-tertiary' : ''
                }`}
                placeholder="Confirm Password"
                placeholderTextColor="white"
                onFocus={() => setIsFocusedConfirmPassword(true)}
                onBlur={() => setIsFocusedConfirmPassword(false)}
            />
        </View>
    );
};

export default RegisterForm;
