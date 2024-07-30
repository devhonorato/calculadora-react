import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Botoes from './Botoes';
import Display from './Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default class Calculadora extends Component {

  state = {
   ...initialState
  }

  addDigito = n => {
    
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    if(n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
        return 
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue+n
    this.setState({displayValue, clearDisplay: false})
    
    if(n != '.'){
        const newValue = parseFloat(displayValue)
        const values = [...this.state.values]
        values[this.state.current] = newValue
        this.setState({values})
    }
  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperation = operation => {
    if(this.state.current === 0){
        this.setState({operation, current: 1, clearDisplay: true})
    }else{
        const equals = operation === '='
        const values = [...this.state.values]

        try{
            values[0] = eval(`${values[0]}  ${this.state.operation}  ${values[1]}`)
        }catch(e){
            values[0] = this.state.values[0]
        }

        values[1] = 0

        this.setState({
            displayValue: `${values[0]}`,
            operation: equals ? null : operation, 
            current: equals ? 0 : 1,
            // clearDisplay: !equals,
            clearDisplay: true,
            values,
        })
    }
  }

    render(){
        return (
            <>
                <Display value={this.state.displayValue} />
                <View style={styles.buttons}>
                    <Botoes label='AC' triple onClick={this.clearMemory} />
                    <Botoes label='/' operation onClick={this.setOperation} />
                    <Botoes label='7' onClick={this.addDigito} />
                    <Botoes label='8' onClick={this.addDigito} />
                    <Botoes label='9' onClick={this.addDigito} />
                    <Botoes label='*' operation onClick={this.setOperation} />
                    <Botoes label='4' onClick={this.addDigito} />
                    <Botoes label='5' onClick={this.addDigito} />
                    <Botoes label='6' onClick={this.addDigito} />
                    <Botoes label='-' operation onClick={this.setOperation} />
                    <Botoes label='1' onClick={this.addDigito} />
                    <Botoes label='2' onClick={this.addDigito} />
                    <Botoes label='3' onClick={this.addDigito} />
                    <Botoes label='+' operation onClick={this.setOperation} />
                    <Botoes label='0' double onClick={this.addDigito} />
                    <Botoes label='.' onClick={this.addDigito}/>
                    <Botoes label='=' operation onClick={this.setOperation} />
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
