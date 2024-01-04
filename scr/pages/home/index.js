import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Visicatto"/> 
      <Balance saldo="9.250,00" gastos="-524,00"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
