import React from 'react'

function Cart({ cart, setCart }) {
console.log("🚀 ~ Cart ~ cart:", cart)


    if(cart?.length<=0) {
        return<p>Cart is Empty</p>
    }

    function removeFromCart(id){
            setCart(carts=> carts.filter(ct=> ct.id !== id))
    }
    return (
        <div className=' max-w-[1400px] mx-auto w-full '>
            
            {
                cart?.map((item, index) => (
                      <div key={item.id} className=' flex items-center gap-4 '>
                        <div>
                            <img src={item?.thumbnail} className=' size-[120px] rounded-md  ' alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                        
                        <div>
                            <button onClick={()=>removeFromCart(item.id)} className=' size-8 text-xl bg-black text-white rounded-md cursor-pointer flex justify-center items-center'  >-</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart