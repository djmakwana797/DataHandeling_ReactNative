import React, {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomInput from './components/CustomInput'
import Invoice from './models/Invoice'
import { observer } from 'mobx-react';
import Item from './components/Item/Item';

const invoice = Invoice.create({ currency : "INR"})

const AppScreen = () => {
    // console.log(invoice)
    const [name, setname] = useState('')
    const [quantity, setquantity] = useState(null)
    const [price, setprice] = useState(null)

    const onSave = () => {
        invoice.itemList.add({
            name: name,
            quantity: Number(quantity),
            price: Number(price)
        })
        setname('')
        setquantity('')
        setprice('')
    }

    return(
        <View style={styles.container}>
        <Text style={styles.text}>{invoice.status()}</Text>
        {!invoice.is_paid && <Button title='Pay' onPress={invoice.markPaid()}/>}

        <CustomInput label="Name" value={name} setValue={setname} placeholder="Enter Item name"/>
        <CustomInput label="Quantity" value={quantity} setValue={setquantity} placeholder="Enter quantity"/>
        <CustomInput label="Price" value={price} setValue={setprice} placeholder="Enter price"/>

        <Button title='Save' onPress={()=>onSave()}/>

        <Text style={styles.text}>Total {invoice.itemList.total()}</Text>
        <ScrollView>
        {invoice.itemList.items.map((item,i)=>(
            <Item item={item} key={i}/>
        ))}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: '#030',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 8
  }
});

export default observer(AppScreen)