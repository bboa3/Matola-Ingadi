import React from 'react';
import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import INICIAL_STATE from '../utils/inicialState';

import { AccessoriesTypes, Accessory, EventsHistories} from 'state-data';

interface Props {
  data: {
    accessoriesTypes: AccessoriesTypes
    accessory: Accessory
    eventsHistories: EventsHistories
  };

  setData: React.Dispatch<React.SetStateAction<{
    accessoriesTypes: AccessoriesTypes
    accessory: Accessory
    eventsHistories: EventsHistories
  }>>;
}

export const DataContext =  createContext<Props>({} as Props);

const DataProvider: React.FC = ({children}) => { 
  
  const [ data, setData ] = useLocalStorage('AISUPREMEEvents', INICIAL_STATE.data);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  ) 
}

export default DataProvider;