
import { useRouter } from 'next/router';

const ProductDetails = () => {
    const router = useRouter();
    const { productid } = router.query;
    return ( <>
       <p>product details</p>
   
         <p>Product ID: {productid}</p>
    </> 
    );  
};

export default ProductDetails;