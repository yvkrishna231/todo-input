import React from 'react';

const UserContext = React.createContext('venkata krishna');

const DataProvider = UserContext.Provider;

const DataConsumer = UserContext.Consumer;

export { DataProvider, DataConsumer, UserContext as default }