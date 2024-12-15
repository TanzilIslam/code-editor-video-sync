function generateHTML(content = '') {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    ${content}
  </body>
</html>`
}

const h1 = `<h1>Welcome to next gen editor</h1>`
const p = ` <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt est
      delectus nemo praesentium omnis vitae quae doloremque, eveniet cumque.
      Sequi excepturi quibusdam atque odio quia molestias est eius architecto
      consequuntur?
    </p>`

export const codeStates = {
  0: '',
  3: generateHTML(),
  21: generateHTML(h1),
  27: generateHTML(`${h1}${p}`),
  51: generateHTML(`
    ${h1}
    ${p}
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZSUyMHBheWxvYWR8ZW58MHx8MHx8&w=1000&q=80"
      height="400"
      width="600"
      alt=""
    />`),
}
