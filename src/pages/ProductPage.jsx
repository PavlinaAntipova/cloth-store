import { useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from '@tanstack/react-query';

import Loader from "components/Loader";
import GalleryItem from "components/GalleryItem";

import { Btn, Section, TitleSection } from "helper/CommonStyledComponents";
import { Content, ImgBox, Price, ProductBox, Size, TagBtn } from "./style/ProductPage.styled";
import { ErrorText } from "components/Loader/Loader.styled";
import { Gallery } from "./style/CategoryPage.styled";

import { addToLocalStorage, formatPrice } from "helper/functions";

import { getCategoryById } from "api/categories";
import { getProducts } from "api/products";

const ProductPage = () => {
  const queryClient = useQueryClient();
  const { state } = useLocation();

  const queryProduct = useQuery(['product', { title: "_id", value: state.id }], getProducts);
  const { data, isError, isLoading, isFetching, status } = queryProduct;

  const categoryId = data?.products ? data.products[0].category.currentCategory : undefined;

  const queryCategory = useQuery(['category', categoryId], getCategoryById, { enabled: !!categoryId });
  
  const queryOtherProducts = useQuery(['other-products', { title: "category", value: categoryId }], getProducts, { enabled: !!categoryId });


  const chooseProducts = arr => {
    const filteredArr = arr.filter(item => item._id !== data.products[0]._id);
    return filteredArr.slice(0, 4);
  }

 
  const getLinkPathByCategory = (category) => {
    if (category?.parentCategory === "root") {
      return `/category/${category?.name.toLowerCase()}`;
    }
    return `/category/${category?.parentCategory.toLowerCase()}/${category?.name.toLowerCase()}`;
  }

   const onBuyBtn = () => {
    addToLocalStorage(data.products[0]);
  }


  return (<>
    {isError ? <>
                <ErrorText>Something went wrong :( </ErrorText>
                <ErrorText>Refresh page and try again</ErrorText>
                </> : <>
        {((isLoading || isFetching) && status !== "success") ? <Loader /> : <article>
            <Section>
              <ProductBox>
                <ImgBox>
                  <img src={data.products[0].img} alt={data.products[0].name} />
                </ImgBox>
                
                    <Content>
            <div>
              {(queryCategory.status === "success") && 
                <>
              
                <TagBtn to={getLinkPathByCategory(queryCategory.data.category)} state={{ id: `${queryCategory.data.category._id}` }}>{queryCategory.data.category.name}</TagBtn>
                
                {data.products[0].tag && <TagBtn to={`/offer/${data.products[0].tag}`} state={{ title: "tag", value: data.products[0].tag }}>{data.products[0].tag}</TagBtn>}
              </>
              }
                 </div>
            <Price>{formatPrice(data.products[0].price)}$</Price>
            <Size>Size: {data.products[0].size}</Size>
                      <Btn type="button" onClick={onBuyBtn}>Buy now</Btn>
                </Content>
              </ProductBox>
                
                
      </Section>
    </article>
    }
    {(queryOtherProducts.status === "success") &&
      <>
      {
        chooseProducts(queryOtherProducts.data.products).length !== 0 && <Section>
      <TitleSection>You might also like</TitleSection>
      <Gallery>
            {chooseProducts(queryOtherProducts.data.products).map(item => <GalleryItem key={item._id} product={item} />)}
      </Gallery>
    </Section>
      }
      </>
      
    }
    
    </>}
      
    </>
    );
}

export default ProductPage;