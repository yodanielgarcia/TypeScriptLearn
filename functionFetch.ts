const url = 'https://jsonplaceholder.typicode.com/todos'
function api<T>(url: string): Promise<T> {
  return fetch(url)
  .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(data => { /* <-- data inferred as { data: T }*/
      console.log(data);      
      return data.data
    })
}
api(url)
