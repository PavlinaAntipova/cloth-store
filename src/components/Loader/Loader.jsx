import { Rings } from 'react-loader-spinner';

import { ErrorText, StyledLoader } from './Loader.styled';

import { theme } from 'helper/styled-theme';

const Loader = ({isError}) => {
  return <StyledLoader>
    {isError ? <>
      <ErrorText>Something went wrong :( </ErrorText>
      <ErrorText>Refresh page and try again</ErrorText>
    </> : <Rings
      height="200"
      width="200"
      color={theme.darkColor}
      radius="10"
      visible={true}
      ariaLabel="rings-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />}
    </StyledLoader>
}

export default Loader;