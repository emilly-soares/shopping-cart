import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function PurchaseInputField(props) {
  const [purchase, setPurchase] = useState({
    name: '',
    brand: '',
    price: '',
    quantity: '',
  });

  const handleAddPurchase = () => {
    props.addPurchase(purchase);
    setPurchase({ name: '', brand: '', price: '', quantity: '' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Nome do Produto:</Text>
        <TextInput
          style={styles.inputField}
          placeholder={'Digite o nome do produto'}
          placeholderTextColor={'#fff'}
          value={purchase.name}
          onChangeText={(text) => setPurchase({ ...purchase, name: text })}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Marca do Produto:</Text>
        <TextInput
          style={styles.inputField}
          placeholder={'Digite a marca do produto'}
          placeholderTextColor={'#fff'}
          value={purchase.brand}
          onChangeText={(text) => setPurchase({ ...purchase, brand: text })}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Preço:</Text>
        <TextInput
          style={styles.inputField}
          placeholder={'Digite o preço'}
          placeholderTextColor={'#fff'}
          keyboardType="numeric"
          value={purchase.price}
          onChangeText={(text) => setPurchase({ ...purchase, price: text })}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Quantidade:</Text>
        <TextInput
          style={styles.inputField}
          placeholder={'Digite a quantidade'}
          placeholderTextColor={'#fff'}
          keyboardType="numeric"
          value={purchase.quantity}
          onChangeText={(text) => setPurchase({ ...purchase, quantity: text })}
        />
      </View>

      <TouchableOpacity onPress={handleAddPurchase}>
        <View style={styles.button}>
          <MaterialIcons name="add" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    background: 'linear-gradient(to bottom, #00667B 6%, #1B1A1C)',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  inputRow: {
    marginBottom: 10,
  },
  inputLabel: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },
  inputField: {
    color: '#fff',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#1ED760',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
