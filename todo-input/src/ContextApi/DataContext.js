import React from 'react';

const DataContext = React.createContext('venkatakrishna');

const DataProvider = DataContext.Provider;

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer, DataContext as default }