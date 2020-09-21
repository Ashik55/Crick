import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item_view, style]}>
    <Text style={{...styles.table_header_text, flex: 2}}>{item.name}</Text>
    <Text style={{...styles.table_header_text, flex: 1}}>{item.id}</Text>
    <Text style={{...styles.table_header_text, flex: 1}}>{item.credit}</Text>
    <Text style={{...styles.table_header_text, flex: 1}}>{item.team}</Text>
  </TouchableOpacity>
);

export default function TeamSelector(props) {
  const [selectedId, setSelectedId] = useState([]);

  let arr = props.data.map((item, index) => {
    item.isSelected = false;
    return {...item};
  });

  console.log(arr);

  const renderItem2 = ({item, index}) => {
    const backgroundColor = '#6e3b6e';
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(...selectedId, item.id);
          console.log(selectedId);
        }}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <>
      <FlatList
        data={arr}
        renderItem={renderItem2}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  plyers: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 15,
  },
  item_view: {
    backgroundColor: '#b6a6a6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    height: 50,
    marginBottom: 1,
  },

  table_header_text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
});
