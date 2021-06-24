import saveUserEmail from "../../entity/user/saveEmail"
import validator from '../../formValidators/footer'

export default async (request, response) => {
  if(request.method !== 'POST')
  return response.status(404).send()
  
  const { email } = request.body

  await validator.validate({email})
  const user = await saveUserEmail(email)
  
  if(!user)
  return response.status(400).json({error: 'Não foi possível salvar o email.'})
  
  if(user.name ===  'RegistrationError')
  return response.status(422).json({error: 'Email já em uso, use outro.'})
  
  response.status(201).json(user)
}
