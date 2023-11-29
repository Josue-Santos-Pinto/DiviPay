import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { VStack, Text, Divider, CheckboxGroup } from "@gluestack-ui/themed";
import { Person } from "../components/Person";
import AccountTotal from "../components/AccountTotal";
import { FlatList } from "react-native";

export default function Home() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

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
    console.log(keys);
    setSelected(keys);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <VStack bg="$black" flex={1}>
      <AccountTotal />
      <CheckboxGroup value={selected} flex={1} onChange={onCheckboxChanged}>
        <FlatList
          data={contacts}
          renderItem={({ item, index }) => <Person data={item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <Divider my="$4" bgColor="$secondary700" />
          )}
          contentContainerStyle={{ padding: 24, paddingBottom: 100 }}
          windowSize={5}
        />
      </CheckboxGroup>
    </VStack>
  );
}
