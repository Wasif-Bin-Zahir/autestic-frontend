import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function TableScreen() {
  const tableHead = ['Column 1', 'Column 2', 'Column 3'];
  const tableData = [
    ['Data 1', 'Data 2', 'Data 3'],
    ['Data 4', 'Data 5', 'Data 6'],
    ['Data 7', 'Data 8', 'Data 9'],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        {/* Ensure textStyle is a single style object */}
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text} // Pass a single style object
        />
        <Rows
          data={tableData}
          textStyle={styles.text} // Pass a single style object
        />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, fontSize: 14, textAlign: 'center' }, // Single style object
});
