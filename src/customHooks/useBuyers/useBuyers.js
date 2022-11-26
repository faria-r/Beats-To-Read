import { useEffect, useState } from "react"

const useBuyers = (email) =>{
    const [isBuyer,setIsBuyer] = useState(false);
    const [BuyerLoading,setIsBuyerLoading] = useState(true);
  
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/buyer/${email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data,'Buyer')
              setIsBuyer(data.isBuyer);
              console.log(data.isBuyer)
              setIsBuyerLoading(false);
            });
        }
    },[email,BuyerLoading])
    return [isBuyer,BuyerLoading]
}
export default useBuyers;