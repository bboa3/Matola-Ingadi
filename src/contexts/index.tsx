import React, { createContext } from 'react';
import { AccessoriesTypes, Accessory, EventsHistories } from 'matola-ingadi';
import useLocalStorage from '../hooks/useLocalStorage';

type Data = {
  accessoriesTypes?: AccessoriesTypes
  accessory?: Accessory
  eventsHistories?: EventsHistories
}

interface Props {
  data: Data | null

  setData: React.Dispatch<React.SetStateAction<Data | null>>;
}

export const DataContext =  createContext<Props>({} as Props);

const DataProvider: React.FC = ({children}) => { 
  
  const [ data, setData ] = useLocalStorage<Data | null>('matola-ingadi');

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  ) 
}

export default DataProvider;