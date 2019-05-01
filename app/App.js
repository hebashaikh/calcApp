import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
   state = {
        total: 0,
        number: 0,
        newnumber:0,
    }

    multiply = () => {
        // update teamOneScore by 7
        this.setState({
            total: this.state.number * newnumber,
        })
    }


    division = () => {
        // update teamOneScore by 3
        this.setState({
            total: this.state.number / newnumber,
        })
    }

    addition = () => {
        // update teamTwoScore by 7
        this.setState({
            total: this.state.number + newnumber,
        })
    }

    subtraction = () => {
        // update teamTwoScore by 3
        this.setState({
            teamTwoScore: this.state.number - newnumber,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    CALCULATOR
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => {
                            this.multiply();
                        }}

                    >
                        <Text style={styles.buttonText}>
                            *
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => {
                            this.division();
                        }}
                    >
                        <Text style={styles.buttonText}>
                            /
                        </Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => {
                            this.addition();
                        }}
                    >
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => {
                            this.subtraction();
                        }}
                    >
                        <Text style={styles.buttonText}>
                            -
                        </Text>
                    </TouchableHighlight>
                </View>

                <Text style={styles.paragraph}>
                    Team 1:
                    {this.state.teamOneScore}
                </Text>

                <Text style={styles.paragraph}>
                    Team 2:
                    {this.state.teamTwoScore}

                </Text>

            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 80,
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 10,
    },
});
