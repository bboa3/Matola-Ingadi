import {AnEvent, EventsHistories } from "matola-ingadi"

const separator = (
  eventsHistories: React.MutableRefObject<EventsHistories>,
  even: AnEvent
  ) => {
  if(even.eventType === "Casamento")
  return getPhotographs(even, eventsHistories.current.casamentos) 
  
  if(even.eventType === "Boda") 
  return getPhotographs(even, eventsHistories.current.bodas) 
  
  if(even.eventType === "Aniversário") 
  return getPhotographs(even, eventsHistories.current.aniversário)
  
  
  if(even.eventType === "Graduação") 
  return getPhotographs(even, eventsHistories.current.graduação)
  
  if(even.eventType === "Evento Empresarial")
  return getPhotographs(even, eventsHistories.current.eventosEmpresariais) 
  
  if(even.eventType === "Evento Corporativo")
  return getPhotographs(even, eventsHistories.current.eventosCorporativos) 
  
  if(even.eventType === "Evento Cultural") 
  return getPhotographs(even, eventsHistories.current.eventosCulturais)
  
  if(even.eventType === "Festá Religiosa") 
  return getPhotographs(even, eventsHistories.current.festásReligiosas) 
  
  return
}


const getPhotographs = (
  even: AnEvent,
  photographs:string[]
) => {
  even.eventHistories.forEach(history => history.photos.forEach(photos => {
    photographs.push(photos.path)
  }))
  
  photographs.splice(0, 1);
}

export default separator;