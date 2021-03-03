const photos = [
  {id: 0, path: ''}
]

const INICIAL_STATE = {
  data: {
    accessoriesTypes: [ "" ],
    accessory: {
      accessoriesType: "",
      description: "",
      photos: photos
    },
    eventsHistories: {
      casamentos: [""],
      bodas: [""],
      aniversário: [""],
      graduação: [""],
      eventosEmpresariais: [""],
      eventosCorporativos: [""],
      eventosCulturais: [""],
      festásReligiosas: [""]
    }
  }
}

export default INICIAL_STATE;