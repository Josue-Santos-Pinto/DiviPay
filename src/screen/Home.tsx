import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { VStack, Text, Divider, CheckboxGroup } from "@gluestack-ui/themed";
import { Person } from "../components/Person";
import AccountTotal from "../components/AccountTotal";
import { FlatList, ListRenderItemInfo } from "react-native";
import { PersonType } from "../models/PersonType";
import Loading from "../components/Loading";
import UnitaryAccount from "../components/UnitaryAccount";

export default function Home() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [unitaryValue, setUnitaryValue] = useState(0);

  console.log(totalValue);

  async function fetchContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === Contacts.PermissionStatus.GRANTED) {
        const { data } = await Contacts.getContactsAsync();
        setContacts(data);
      }
    } catch (e) {
      alert(e);
    }
  }
  function onCheckboxChanged(keys: string[]) {
    setSelected(keys);
    if (totalValue == 0) {
      alert("Digite o valor total");
    }
  }

  function renderItem({ item }: ListRenderItemInfo<PersonType>) {
    return <Person data={item} />;
  }

  function unitaryAccountText() {
    if (totalValue > 0 && selected.length > 0) {
      setUnitaryValue(totalValue / (selected.length + 1));
    }
  }

  useEffect(() => {
    unitaryAccountText();
  }, [selected, totalValue]);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <VStack bg="$black" flex={1}>
      <AccountTotal setTotalValue={setTotalValue} />
      <CheckboxGroup value={selected} flex={1} onChange={onCheckboxChanged}>
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <Divider my="$4" bgColor="$secondary700" />
          )}
          contentContainerStyle={{ padding: 24, paddingBottom: 100 }}
          windowSize={5}
          onEndReachedThreshold={0.1}
          getItemLayout={(data, index) => ({
            length: 120, // Altura do item
            offset: 120 * index, // Deslocamento do item
            index,
          })}
        />
      </CheckboxGroup>
      {totalValue > 0 && selected.length > 0 && (
        <UnitaryAccount value={unitaryValue} />
      )}
    </VStack>
  );
}
