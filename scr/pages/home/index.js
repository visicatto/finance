import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements"
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: "conta de luz",
    value: "300,90",
    date: '07/12/2023',
    type: 0
  },
  {
    id: 2,
    label: "Pix clinte x",
    value: "2.500",
    date: '09/12/2023',
    type: 1
  },
  {
    id: 3,
    label: "Salário",
    value: "13.100",
    date: '10/01/2024',
    type: 1
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Visicatto" />

      <Balance saldo="9.250,00" gastos="-524,00" />

      <Actions/>

      <Text style={styles.title}>Ultimas movimentações</Text>
      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item})  => < Movements data={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
