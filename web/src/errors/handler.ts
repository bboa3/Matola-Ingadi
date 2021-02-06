interface ValidationErrors {
  name: string[]
  email: string[]
  phoneNumber: string[]
  customerEvent: string[]
  date: string[]
}

const validationErros = (errors: ValidationErrors) => {
  if(errors.name) 
  return errors.name[0];
  
  if(errors.email) 
  return errors.email[0];
  
  if(errors.phoneNumber) 
  return errors.phoneNumber[0];
  
  if(errors.customerEvent) 
  return errors.customerEvent[0];
  
  if(errors.date) 
  return errors.date[0];
}

const errorHandle = {
  render(data: any) {

    if(data.errors) 
    return validationErros(data.errors)
  
    if(data.error) 
    return data.error;
  }
}

export default errorHandle;