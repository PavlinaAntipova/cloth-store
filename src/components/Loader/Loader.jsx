import { Rings } from 'react-loader-spinner';

import { ErrorText, SmallLoader, StyledLoader } from './Loader.styled';

import { theme } from 'helper/styled-theme';

const Loader = ({isError, size = null}) => {
  return <>
   {isError ? <StyledLoader>
      <ErrorText>Something went wrong :( </ErrorText>
      <ErrorText>Refresh page and try again</ErrorText>
    </StyledLoader> :
      <>
        {size ? <StyledLoader><Rings
      height="200"
      width="200"
      color={theme.darkColor}
      radius="10"
      visible={true}
      ariaLabel="rings-loading"
      wrapperStyle={{}}
      wrapperClass=""
    /></StyledLoader> : <SmallLoader><Rings height="100" width="100" color={theme.darkColor} radius="6" visible={true} ariaLabel="rings-loading" /></SmallLoader>}
      </>
    }
  </>
}

export default Loader;


  

 