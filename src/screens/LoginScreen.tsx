import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Feather } from "@expo/vector-icons"; // eye / eye-off

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Basit demo kontrolü
    if (email === "test@gmail.com" && password === "123456") {
      Alert.alert("Success", "Giriş başarılı!");
    } else {
      Alert.alert("Hata", "E-posta veya şifre hatalı!");
    }
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>
      <Text style={styles.subheader}>Sign in to your account.</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#999"
        onChangeText={setEmail}
        value={email}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword((prev) => !prev)}
        >
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.forgot}>Forgot Password?</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Continue With</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtnGoogle}>
          <Text style={styles.socialText}>
            <FontAwesome5 name="google" size={20} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtnFacebook}>
          <Text style={styles.socialText}>
            <FontAwesome5 name="facebook-f" size={24} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Not a Member?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          Join Now
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subheader: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  forgot: {
    alignSelf: "flex-end",
    color: "#999",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f4a261",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  passwordContainer: {
    position: "relative",
    justifyContent: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    top: 14,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 30,

    justifyContent: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  orText: {
    color: "#999",
    fontSize: 14,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 24,
  },
  socialBtnGoogle: {
    backgroundColor: "#CE2E48",
    color: "white",
    padding: 12,
    borderRadius: 8,
    width: 150,
    height: 50,
    alignItems: "center",
  },
  socialBtnFacebook: {
    backgroundColor: "#4067B0",
    color: "white",
    padding: 12,
    borderRadius: 8,
    width: 150,
    height: 50,
    alignItems: "center",
  },

  socialText: {
    fontSize: 18,
  },
  footer: {
    marginTop: 195,
    justifyContent: "flex-end",
    textAlign: "center",
    color: "#444",
  },
  link: {
    color: "#f4a261",
    fontWeight: "bold",
  },
});
