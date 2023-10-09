import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { product } from "./product";

const App = () => {
  return (
    product.map((prct): any => {
      return <View><QRCode
      value={prct.uuid}
    /><Text>{prct.food}</Text></View>
    })

  );
}

const styles = StyleSheet.create({

});

export default App;
