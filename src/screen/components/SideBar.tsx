import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Avatar } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Sidebar = ({ profileImage, name, email, onProfileSettings, onAccount, onDevices, onLogout }) => {
  return (
    <View flex={1} backgroundColor="white">
      {/* Profile Settings */}
      <View padding={4} borderBottomWidth={1} borderBottomColor="gray">
        <Avatar size="md" source={{uri:profileImage}} />
        <Text mt={2} fontSize={18} fontWeight="bold">
          {name}
        </Text>
        <Text mt={1} fontSize={14} color="gray.600">
          {email}
        </Text>
      </View>

      {/* Drawer Items */}
      <View mt={4}>
        <DrawerItem icon="settings" label="Profile Settings" onPress={onProfileSettings} />
        <DrawerItem icon="person" label="Account" onPress={onAccount} />
        <DrawerItem icon="mobile-friendly" label="Devices" onPress={onDevices} />
        <DrawerItem icon="logout" label="Logout" onPress={onLogout} />
      </View>
    </View>
  );
};

const DrawerItem = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
      <Icon as={MaterialIcons} name={icon} size={8} color="blue" style={styles.drawerIcon} />
      <Text style={styles.drawerLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  drawerIcon: {
    marginRight: 12,
    color: 'red'
  },
  drawerLabel: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Sidebar;
