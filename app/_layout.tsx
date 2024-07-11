import React from 'react';

import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="getStated" options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreens" options={{ headerShown: false }} />
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="cart" options={{ headerShown: false }} />
        </Stack>
    );
};
