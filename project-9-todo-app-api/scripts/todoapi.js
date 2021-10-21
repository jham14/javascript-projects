//get 5 todos from placeholder - then update todoArray and create templates
function getTodos () {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => {
      const data = response.data;
      todoArray = data
      todoArray.forEach(i => {
        generateTemplate(i)
      });

    })
    .catch(error => console.log(error));
};
