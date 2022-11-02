import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { Rings } from 'react-loader-spinner';

import GalleryItem from "components/GalleryItem";

import { FormBtn, Section, Input, TitleSection } from "helper/CommonStyledComponents";
import { Gallery } from "./style/CategoryPage.styled";
import { SearchQuantity } from "./style/SearchPage.styled";
import { ErrorText, SmallLoader } from "components/Loader/Loader.styled";
import { theme } from "helper/styled-theme";

import { getProducts } from "api/products";


const SearchPage = () => {
    const [valueInput, setValueInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const queryProducts = useQuery(['products', { title: "name", value: searchQuery }], getProducts, {enabled: !!searchQuery});
    const { data, isError, isLoading, isFetching, status } = queryProducts;


    const onChangeInput = (e) => {
        setValueInput(e.target.value);
    }


    return (<main>
        <Section>
            <TitleSection>Find whatever you want</TitleSection>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSearchQuery(valueInput);
            }}>
                <Input type="text" value={valueInput} onChange={onChangeInput} required placeholder="Search"/>
                <FormBtn type="submit">Search</FormBtn>
            </form>
            {isError ? <>
                <ErrorText>Something went wrong :( </ErrorText>
                <ErrorText>Refresh page and try again</ErrorText>
                </> : <>
                    {
                status === "success" && <>
                {isLoading || isFetching ? <SmallLoader><Rings height="100" width="100" color={theme.darkColor} radius="6" visible={true} ariaLabel="rings-loading" /></SmallLoader>
                    : <>
                        {
                            data.products.length === 0 ? <p style={{ marginTop: "30px" }}>There is no product</p> : <>
                            <SearchQuantity>{data.products.length > 1 ? `${data.products.length} Items` : `${data.products.length} Item`}</SearchQuantity>
                            <Gallery>
                                {data.products.map(product => <GalleryItem key={product._id} product={product} />)}
                            </Gallery>
                        </>
                        }
                    </>
                }
                </>
            }
            </>}
            

      </Section>
    </main>
    );
}

export default SearchPage;