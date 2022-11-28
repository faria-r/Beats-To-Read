import { useEffect, useState } from "react"

const useSeller = (email) =>{
    const [isSeller,setIsSeller] = useState(false);
    const [sellerLoading,setSellerLoading] = useState(true);
    useEffect(()=>{
        setSellerLoading(true);
        if(email){
            fetch(`https://assignment-twelve-server-psi.vercel.app/users/seller/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setSellerLoading(false);
                console.log(data,'seller')
              setIsSeller(data.isSeller);
              console.log(data.isSeller)
             
            });
          
        }
    },[email])
    return [isSeller,sellerLoading]
}
export default useSeller;