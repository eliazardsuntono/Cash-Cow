import React from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet
} from 'react-native';

export default class SignUp extends React.Component {
    state = {
        email: '', 
        password: '',
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    signUp = async () => {
        const { email, password } = this.state
        try {
            console.log('user successfully signed up!: ', email, password)
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }
    render(){
        return (
            <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder='Email'
              autoCapitalize="none"
              placeholderTextColor='white'
              onChangeText={val => this.onChangeText('email', val)}
            />
            <TextInput
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor='white'
              onChangeText={val => this.onChangeText('password', val)}
            />
            <Button
              title='Sign Up'
              onPress={this.signUp}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#42A5F5',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
