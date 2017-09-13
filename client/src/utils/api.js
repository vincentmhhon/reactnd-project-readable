const HOST = 'http://localhost:3001'
const 

const headers = {
  'Authorization': 'anything'
}

export const getCategories = () =>
  fetch(`${HOST}/categories`, { header })
    .then(res => res.json())
    .then(data => data.categories)