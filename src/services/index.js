export const getChannels = () => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/mocks/epg.json`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(products => resolve(products))
    .catch(error => reject(error))
  })
}