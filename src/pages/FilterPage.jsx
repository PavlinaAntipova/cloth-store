import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation } from "react-router-dom";

import GalleryItem from "components/GalleryItem";
import Loader from "components/Loader";
import Newsletter from "components/Newsletter";

import { CategorySection, Gallery, Quantity } from "./style/CategoryPage.styled";
import { ErrorText } from "components/Loader/Loader.styled";

import { getProducts } from "api/products";


const FilterPage = () => {
    const queryClient = useQueryClient();
    const {state} = useLocation();

    const queryProducts = useQuery(['products', { title: state.title, value: state.value }], getProducts);
    const { data, isError, isLoading, isFetching } = queryProducts;

    return (<>
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

export default FilterPage;