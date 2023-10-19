import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, View, StyleSheet } from 'react-native';
import PurchaseInputField from './components/PurchaseInputField';
import PurchaseItem from './components/PurchaseItem';

export default function App() {
  const [purchases, setPurchases] = useState([]);

  const addPurchase = (purchase) => {
    if (
      !purchase ||
      !purchase.name ||
      !purchase.brand ||
      !purchase.price ||
      !purchase.quantity
    )
      return;

    setPurchases([...purchases, purchase]);
    Keyboard.dismiss();
  };

  const deletePurchase = (deleteIndex) => {
    setPurchases(purchases.filter((value, index) => index !== deleteIndex));
  };

  const calculateTotalQuantity = () => {
    return purchases.reduce(
      (total, purchase) => total + parseInt(purchase.quantity, 10),
      0
    );
  };

  const calculateTotalValue = () => {
    return purchases.reduce(
      (total, purchase) =>
        total + parseFloat(purchase.price) * parseInt(purchase.quantity, 10),
      0
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Carrinho de Compras</Text>

      <PurchaseInputField addPurchase={addPurchase} />

      <ScrollView style={styles.scrollView}>
        {purchases.map((purchase, index) => {
          return (
            <View key={index} style={styles.purchaseContainer}>
              <PurchaseItem
                purchase={purchase}
                deletePurchase={() => deletePurchase(index)}
              />
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Quantidade de Produtos:</Text>
        <Text style={styles.totalValue}>{calculateTotalQuantity()}</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Valor Total:</Text>
        <Text style={styles.totalValue}>
          R$ {calculateTotalValue().toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A1C',
    padding: 20,
  },
  heading: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },
  scrollView: {
    marginBottom: 10,
  },
  purchaseContainer: {
    marginTop: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalLabel: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  totalValue: {
    color: '#FFF',
    fontSize: 16,
  },
});
