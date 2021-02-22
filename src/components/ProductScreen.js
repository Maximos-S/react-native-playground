import React, {useState, useEffect} from 'react';
import { Alert, SectionList, ScrollView, SafeAreaView, StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import ProductDetail from './ProductDetail';
export default function ProductScreen ({history}) {
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];
  
  const Item = ({ product }) => (
    <ProductDetail style={styles.item} product={product} style={styles.title} history={history}/>
  );
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          style={styles.SectionList}
          sections={DATA}
          keyExtractor={(item, idx) => {
          return item + idx}}
          renderItem={({item}) => {
            return <Item product={item} />}}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.title}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );



    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  SectionList: {
    width: "100%",
    padding: 20,
  },
  navbarContainer: {
    width: "100%",
    // height: 500,
    backgroundColor: "tomato",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'dodgerblue',
  },
  navigation: {
    backgroundColor: "tomato"
  },
  item: {
    backgroundColor: "gold",
    padding: 20,
    marginVertical: 8,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    height: 'auto',

    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  title: {
    fontSize: 24,
  }
})