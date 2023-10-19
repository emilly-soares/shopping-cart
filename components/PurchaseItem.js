import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function PurchaseItem(props) {
  const { purchase, deletePurchase } = props;

  return (
    <View style={styles.container}>
      <View style={styles.purchaseContainer}>
        <Text style={styles.purchaseName}>
          {purchase.name} - {`${purchase.brand}`}
        </Text>
        <Text style={styles.purchaseDetails}>
          {purchase.quantity} x {`R$ ${purchase.price}`}
        </Text>
        <TouchableOpacity onPress={deletePurchase}>
          <MaterialIcons name="delete" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  purchaseContainer: {
    backgroundColor: '#00667B',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  purchaseName: {
    color: '#fff',
    width: '60%',
    fontSize: 16,
  },
  purchaseDetails: {
    color: '#fff',
    width: '30%',
    fontSize: 16,
  },
});
