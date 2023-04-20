import axios from 'axios'

export async function sendMessageToLineNotify(token: string, message: string) {
  const url = 'https://notify-api.line.me/api/notify'
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${token}`,
  }
  const data = new URLSearchParams()
  data.append('message', message)
  return axios.post(url, data, { headers })
}
