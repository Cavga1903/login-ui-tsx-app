import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const { width } = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* GÖRSEL */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/ceket.jpg')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* ALT BÖLÜM */}
        <LinearGradient
          colors={['#000', '#000000ee', '#000000cc']}
          style={styles.bottomContainer}
        >
          <Text style={styles.title}>Start You Shopping{'\n'}Journey Now</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Adipiscommo ligula eget dolor aenean
          </Text>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#000',
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: -70,
    
  },
  image: {
    width: width * 1.8,
    height: width * 1.2,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    color: '#bbb',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 28,
  },
  loginBtn: {
    borderWidth: 1.5,
    borderColor: '#f4a261',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  loginText: {
    color: '#f4a261',
    fontWeight: '600',
    fontSize: 16,
  },
  signupBtn: {
    backgroundColor: '#f4a261',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});