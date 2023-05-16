import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function LoginPage({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  var visibility = true;
  function changePasswordVisibility() {
    if (visibility === true) {
      visibility = false;
    } else {
      visibility = true;
    }
  }

  function handleLogin() {
    if(username==='akhter' && password==='1234'){
      navigation.navigate('HomePage',{authorized: true});
    } else {
      setLoginMessage("bad creds");
    }
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Image source={require('../img/logo.png')} style={styles.logoImage} />
        <View style={styles.verticalLine} />
        <Text style={styles.logoText}>one stop ideator</Text>
        <Text style={styles.version}>V 1.0</Text>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <View style={styles.scrollBody}>
          <View style={styles.bannerContainer}>
            <Image
              source={require('../img/login-background-image.png')}
              style={styles.bannerImage}
            />
          </View>
          <Text style={styles.loginMessage}>Log in to Continue</Text>
          <Text style={[styles.loginMessage,{color: 'red',fontSize: 15}]}>{loginMessage}</Text>
          <View style={styles.inputContainer}>
            <Image
              source={require('../img/username.png')}
              style={styles.usernameIcon}
            />
            <TextInput
              placeholder="username"
              style={styles.input}
              keyboardType="email-address"
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../img/Password.png')}
              style={styles.usernameIcon}
            />
            <TextInput
              placeholder="password"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            {/* <TouchableOpacity style={{ backgroundColor: 'black', width: 10, height: 10, right: 10 }} onPress={() => changePasswordVisibility()}>
            </TouchableOpacity> */}
          </View>
          <TouchableOpacity
            style={styles.loginButtonContainer}
            onPress={() => navigation.navigate('HomePage')}>
            <Text style={styles.loginbutton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginbutton}>
            <Text
              style={
                (styles.loginbutton,
                {color: 'blue', fontSize: 16, fontWeight: '400'})
              }>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  logoImage: {
    position: 'absolute',
    left: 10,
  },
  verticalLine: {
    position: 'relative',
    left: 75,
    backgroundColor: 'blue',
    width: 1.4,
    height: 40,
  },
  logoText: {
    position: 'relative',
    left: 90,
    color: '#3D5CFF',
    fontWeight: '500',
  },
  scrollBody: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  version: {
    position: 'absolute',
    right: 15,
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F3FD',
    width: 330,
    margin: 10,
    paddingLeft: 15,
    padding: 4,
    alignSelf: 'center',
    borderRadius: 15,
  },
  input: {
    marginLeft: 15,
    paddingLeft: 15,
    borderRadius: 15,
    fontSize: 20,
    fontWeight: '600',
    color: '#858597',
    width: '85%',
  },
  loginMessage: {
    alignSelf: 'center',
    fontSize: 22,
    padding: 10,
    fontWeight: '600',
  },
  loginButtonContainer: {
    alignSelf: 'center',
    width: 335,
    height: 50,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FF6905',
    justifyContent: 'center',
  },
  loginbutton: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
