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
                        style={styles.operatorformat}
                        onPress = {() => {
                            this.multiply();
                        }}

                    >
                        <Text style={styles.operators}>
                            *
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.operatorformat}
                        onPress = {() => {
                            this.division();
                        }}
                    >
                        <Text style={styles.operators}>
                            /
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.operatorformat}
                        onPress = {() => {
                            this.addition();
                        }}
                    >
                        <Text style={styles.operators}>
                            +
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.operatorformat}
                        onPress = {() => {
                            this.subtraction();
                        }}
                    >
                        <Text style={styles.operators}>
                            -
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            1
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            2
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            3
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            4
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            5
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            6
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            7
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            8
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            9
                        </Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.zerobutton}
                    >
                        <Text style={styles.buttonText}>
                            0
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
        backgroundColor: 'black',
        position: 'absolute',
        bottom:0
    },
    operators: {
      color:'white',
      fontSize:10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        height: 50,
        width: 80,
        backgroundColor: 'gray',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    operatorformat:{
        height: 50,
        width: 60,
        backgroundColor: 'orange',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    zerobutton: {
        height: 50,
        width: 240,
        backgroundColor: 'gray',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'left',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
});
