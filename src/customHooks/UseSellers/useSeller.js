import { useEffect, useState } from "react"

const useSeller = (email) =>{
    const [isSeller,setIsSeller] = useState(false);
    const [sellerLoading,setSellerLoading] = useState(true);
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data,'seller')
              setIsSeller(data.isSeller);
              console.log(data.isSeller)
              setSellerLoading(false);
            });
        }
    },[email,sellerLoading])
    return [isSeller,sellerLoading]
}
export default useSeller;