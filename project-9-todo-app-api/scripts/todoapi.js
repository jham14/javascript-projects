

const placeHoldTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    return data
};

placeHoldTodos().then(data => {
  let apiArray = []
  apiArray.push(data)

  apiArray.forEach((item) => {

  generateTemplate(item)
  });

});
