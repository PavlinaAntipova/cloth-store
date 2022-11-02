import { useQuery } from '@tanstack/react-query';
import { useLocation } from "react-router-dom";

import AdSection from "components/AdSection";
import GalleryItem from "components/GalleryItem";
import Newsletter from "components/Newsletter";
import Loader from "components/Loader";

import { CategorySection, Gallery, Quantity } from "./style/CategoryPage.styled";
import { ErrorText } from "components/Loader/Loader.styled";

import { getProductsByCategory } from "api/products";
import { getCategoryById } from "api/categories";



const CategoryPage = ({offers}) => {
    const { state } = useLocation();

    const queryCategory = useQuery(['category', state.id], getCategoryById);

    const queryProducts = useQuery(['products', { parentCategory: queryCategory.data?.category.parentCategory, currentCategory: queryCategory.data?.category._id, subcategory: queryCategory.data?.category.childrenCategories.length > 0 ? 1 : -1 }], getProductsByCategory, { enabled: !!queryCategory.data });

    const { data, isLoading, isFetching, isError } = queryProducts;


    return (<>
        <AdSection offers={offers}/>
        <main>
            {isError ? <>
                <ErrorText>Something went wrong :( </ErrorText>
                <ErrorText>Refresh page and try again</ErrorText>
                </> : <>
                {(isLoading || isFetching) ? <Loader /> : 
                <CategorySection>
                    {data.products.length === 0 ? <p>There is no product</p> : <>
                        <Quantity>{data.products.length > 1 ? `${data.products.length} Items` : `${data.products.length} Item`}</Quantity>
                    <Gallery>
                    {data.products.map(product => <GalleryItem key={product._id} product={product} />)}
                    </Gallery>
                    </>}
            
        </CategorySection>}
            </>}
            
        
        </main>
        <Newsletter />
        </>
    );
}

export default CategoryPage;