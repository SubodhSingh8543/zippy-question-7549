import ProductCard from "../Components/ProductCard";

import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { getProducts } from "../Redux/product/product.action";
import { Box, Flex, Grid, GridItem, Show, Skeleton } from "@chakra-ui/react";
import Pagination from "../Components/Pagination";
import FilterAndSort from "../Components/FilterAndSort";
import { useLocation, useSearchParams } from "react-router-dom";


const ProductPage = () => {

    const {products,activePage,loading,perPage} = useSelector((store)=>{
      return {
        products : store.productReducer.product,
        loading : store.productReducer.loading,
        perPage : store.productReducer.perPage,
        activePage : store.productReducer.activePage
      }
    },shallowEqual)
    
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    
    const location = useLocation()
    
    useEffect(()=>{
        if(products.length===0 || location){
          const getProductsParams = {
            params:{
              category:searchParams.getAll("filter"),
              _sort:"price",
              _order:searchParams.get("sort")
            }
          }
        dispatch(getProducts(getProductsParams))
        }
    },[location.search]);

    return (
      <div>
        <Flex>
           <Box w="25%" mt="8" display={{base:"none",md:"none",lg:"block"}}>
           <FilterAndSort/>
           </Box>
           <Box margin={{base:"auto",md:"auto",lg:"auto"}}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              ml={-4}
              rowGap={-10}
              columnGap={8}
            >
              {products.length > 0 &&
                products
                  .filter((_, i) => {
                    return (
                      i >= perPage * (activePage - 1) &&
                      i < perPage * activePage
                    );
                  })
                  .map((prod) => (
                    
                    <GridItem key={prod.id} m="-10px"> 
                    
                        <ProductCard
                          key={prod.id}
                          image={prod.image}
                          desc={prod.description}
                          name={prod.title}
                          category={prod.category}
                          price={prod.price}
                        />
                    </GridItem>
                    
                  ))}
            </Grid>
            
          </Box>
          
        </Flex>
        <Pagination />
          
        
      </div>
    );
}

export default ProductPage;