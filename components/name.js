import { StatusBar } from 'expo-status-bar';
import react,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, button} from 'react-native';

export default function MyName(){
    const [Name , setName] = useState('wuttipat');
    const [SName , setSName] = useState('seenual');
    console.log("STATE :", Name, SName);
};