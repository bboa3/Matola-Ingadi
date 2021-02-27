import format from 'date-fns/format';
import brLocale from 'date-fns/locale/pt-BR';

const dateFormat = async (usDate: string) => {
  let dateObject = {
    year: 0,
    month: 0,
    day: 0
  }

  usDate.split('-').map(((datePart, index) => {
    if(index === 0) return dateObject = {...dateObject, year: Number(datePart)};
    if(index === 1) return dateObject = {...dateObject, month: Number(datePart)-1};
    if(index === 2) return dateObject = {...dateObject, day: Number(datePart)};
  }))

  return dateObject;
}

const createPtDate = async (date: string) => {
  return await dateFormat(date)
    .then((date) => {
      const result = format(
        new Date(date.year, date.month, date.day),
        "dd 'de' MMMM 'de' yyyy",
        { locale: brLocale }
      )
      return result
})
  .catch(err => console.log(err)
  )
}

export default createPtDate;