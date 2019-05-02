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
                        <Text style={styles.operators}>
                            *
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => {
                            this.division();
                        }}
                    >
                        <Text style={styles.operators}>
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
                        <Text style={styles.operators}>
                            +
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => {
                            this.subtraction();
                        }}
                    >
                        <Text style={styles.operators}>
                            -
                        </Text>
                    </TouchableHighlight>
                </View>
                <Text style={styles.buttonText}>
                    1
                </Text>
                <Text style={styles.buttonText}>
                    2
                </Text>
                <Text style={styles.buttonText}>
                    3
                </Text>
                <Text style={styles.buttonText}>
                    4
                </Text>
                <Text style={styles.buttonText}>
                    5
                </Text>
                <Text style={styles.buttonText}>
                    6
                </Text>
                <Text style={styles.buttonText}>
                    7
                </Text>
                <Text style={styles.buttonText}>
                    8
                </Text>
                <Text style={styles.buttonText}>
                    9
                </Text>
                <Text style={styles.zerobutton}>
                    0
                </Text>

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
        backgroundColor: 'gray',
    },
    operators: {
      color:'orange',
      fontSize:10,
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
        color: #D3D3D3,
        fontSize: 15,
    },
});
