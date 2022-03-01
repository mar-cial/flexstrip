I'm creating a website to showcase products using NextJs. I need to pass data from a page to a dynamic page. All the data is a json array of objects located in a data folder inside the project. My project structure is:

```
- data
  - rollData.json
- pages
  - rolls
    - [rolldetail].jsx
    - index.jsx
```

```
// rollData.json

[
    {
        "name": "8\" x 0.080\" x 300'",
        "price": 300,
        "product_id": "PL8080300",
        "image": "/8flat.webp",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "name": "12\" x 0.080\" x 300'",
        "price": 450,
        "product_id": "PL12080300",
        "image": "/12flat.webp",
        "description": "Ac turpis egestas sed tempus urna et pharetra"
    },
```

```
// rolls.jsx

import rollsdata from '../../data/rollData.json'

const Rolls = () => {
  return (
    <main>
      {rolls.map((roll) => {
          return (
            <div key={roll.product_id}>

              <h2>{roll.name}</h2>

                <h3>
                  Description
                </h3>
                <p>{`${roll.description.slice(0, 163)}.`}</p>

              <div>
                <span>Price</span>
                <span>{`$${roll.price.toFixed(
                  2
                )}`}</span>
              </div>

                <Link href={`/rolls/${encodeURIComponent(roll.product_id)}`}>
                  <a>click</a>
                </Link>

            </div>
          )
        })}
    </main>
  )
}
```
```
// [rollDetail].js
import { useRouter } from 'next/router'
import rolls from '../../data/rolls.json'

const RollDetail = () => {
  const router = useRouter()

  console.log(router.query)
  const roll = rolls[router.query.rolldetail]

  console.log(roll)
  return (
    <div>
      <h2>Roll detail</h2>
      <p>{roll.name}</p>
      <p>{roll.description}</p>
    </div>
  )
}

export default RollDetail
```
And it gives me the error: 
```
Uncaught TypeError: roll is undefined
```

I don't understand how to use router to display a specific roll object, can someone tell me what I'm doing wrong and how to achieve it please? Should I be using getStaticProps and getStaticRoute?