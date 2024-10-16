
const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

getData()