const shoppingCart=[
    {
        item:'js course',
        price:299,

    },
    {
        item:'py course',
        price:1299,

    },
    {
        item:'cpp course',
        price:99,

    },
    {
        item:'c course',
        price:999,

    },
]
 

const bill=shoppingCart.reduce((accum,curr)=>(accum + curr.price),0)

console.log(bill);