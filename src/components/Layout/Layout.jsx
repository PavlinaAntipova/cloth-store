import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import Footer from "components/Footer";
import Header from "components/Header";
import Menu from "components/Menu";
import Loader from "components/Loader";

import { Container, Content, Wrapper } from "./Layout.styled";

import { getCategories } from "api/categories";


const Layout = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1099px)' });
  const [isShownMenu, setIsShownMenu] = useState(() => {if(isMobile) return false});
    const queryClient = useQueryClient();
    const root = document.querySelector('#root');

    const queryCategories = useQuery(['categories'], getCategories);
    const { data, isError, isLoading, isFetching } = queryCategories;

    useEffect(() => {
        if (isShownMenu) {
            disableBodyScroll(root);
        } else {
            enableBodyScroll(root);
        }

        return () => {clearAllBodyScrollLocks()}
    }, [isShownMenu]);

    return (<>
        {(isLoading || isFetching) ? <Loader isError={isError} /> : <Wrapper>
            <Container>
                <Menu categories={data.categories} isShownMenu={isShownMenu} setIsShownMenu={setIsShownMenu}/>
                <Content>
                    <Header setIsShownMenu={setIsShownMenu} />
                    <Outlet />
                    <Footer />
                </Content>
            </Container>
        </Wrapper>
        }
        </>

    );
}

export default Layout;