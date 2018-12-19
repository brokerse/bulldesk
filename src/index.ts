import axios from 'axios'
import { ILead } from './interfaces'

const bulldesk = (token: string) =>
  axios.create({
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    url: 'https://api.bulldesk.com.br',
  })

const conversion = (lead: ILead) =>
  bulldesk()
    .post('/conversion', lead)
    .then(result => result)
    .catch(err => err)

const getLeads = (page?: number) =>
  bulldesk()
    .get('/leads')
    .then(result => result)
    .catch(err => err)

export default {
  conversion,
  getLeads,
}
