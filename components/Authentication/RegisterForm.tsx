import { TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { auth } from "../../utils/FirebaseAuth"; // Adjust the path to your structure
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export const RegisterForm = () => {
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const Register = async () => {

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        try {
            // Register the user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await sendEmailVerification(user);
            Alert.alert("Success", "Verification email sent! Please check your inbox.");
        } catch (error: unknown) {
            // Handle errors
            if (error instanceof Error) {
                Alert.alert("Registration Error", error.message);
            } else {
                Alert.alert("Registration Error", "An unknown error occurred.");
            }
        }
    };

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
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                className={`border-2 text-center w-80 rounded-full border-white ${
                    isFocusedPassword ? 'bg-tertiary' : ''
                } text-white h-12`}
                placeholder="Password"
                placeholderTextColor="white"
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <TextInput
                className={`border-2 text-center w-80 rounded-full border-white ${
                    isFocusedConfirmPassword ? 'bg-tertiary' : ''
                } text-white h-12`}
                placeholder="Confirm Password"
                placeholderTextColor="white"
                onFocus={() => setIsFocusedConfirmPassword(true)}
                onBlur={() => setIsFocusedConfirmPassword(false)}
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
                className="border-2 justify-center w-80 rounded-full items-center bg-tertiary h-16 shadow-lg"
                onPress={Register}
            >
                <Text className="text-black font-semibold text-lg">SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterForm;
