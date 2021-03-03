declare module 'state-data' {

  export type AccessoriesTypes = string[]

  export interface Accessory {
    accessoriesType: string
    description: string
    photos: Photos
  }

  type Photos = {
    id: number
    path: string
  }[]

  export type AnEvent = {
    eventType: string
    eventHistories: EventHistories
  }

  export type EventsHistories = {
    casamentos: string[]
    bodas: string[]
    aniversário: string[]
    graduação: string[]
    eventosEmpresariais: string[]
    eventosCorporativos: string[]
    eventosCulturais: string[]
    festásReligiosas: string[]
  }


  export type EventHistories = {
    id: number
    eventType: string
    title: string
    description: string
    photos: Photos
    createdAt: string
  }[]
}