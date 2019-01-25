import axios from 'axios'
import { ILead } from './interfaces'

const bulldesk = (token: string) =>
  axios.create({
    baseURL: 'https://api.bulldesk.com.br',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

export const conversion = (lead: ILead, token: string) =>
  bulldesk(token)
    .post('/conversion', { ...lead, token })
    .then(result => result)
    .catch(err => err)

export const getLeads = (page: number = 0, token: string) =>
  bulldesk(token)
    .get(`/lead?page=${page}`)
    .then(result => result)
    .catch(err => err)

export default {
  conversion,
  getLeads,
}
