import { useEffect, useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useQuery } from '@tanstack/react-query';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import Footer from "components/Footer";
import Header from "components/Header";
import Menu from "components/Menu";
import Loader from "components/Loader";

import { Container, Content, Wrapper } from "./Layout.styled";

import { getCategories } from "api/categories";


const Layout = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1099px)' });
    const [isShownMenu, setIsShownMenu] = useState(() => { if (isMobile) return false });
    const root = useMemo(() => document.querySelector('#root'), []);

    const queryCategories = useQuery(['categories'], getCategories);
    const { data, isError, isLoading, isFetching } = queryCategories;

    useEffect(() => {
        if (isShownMenu) {
            disableBodyScroll(root);
        } else {
            enableBodyScroll(root);
        }

        return () => {clearAllBodyScrollLocks()}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShownMenu]);

    return (<>
        {(isLoading || isFetching) ? <Loader isError={isError} size={true} /> : <Wrapper>
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