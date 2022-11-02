import { ErrorText } from "components/Loader/Loader.styled";
import { Ad, AdDescription, AdTitle, AdBtn } from "./AdSection.styled";


const AdSection = ({offers}) => {
  const { data, isError, isFetching } = offers;
  

  return (<Ad bgImg={data ? data?.data.offers[0].img : undefined}>
    <>
    {
        isError ? <ErrorText>Soon there will be actual offer</ErrorText> : <>
          {!isFetching && data && <><AdTitle>{data.data.offers[0].title}</AdTitle>
        <AdDescription>{data.data.offers[0].text}</AdDescription>
      <AdBtn to="/offer/current#header" state={{ title: "tag", value: data.data.offers[0].tag }}>shop now</AdBtn>
        </>}
      </>
    }
    </>
    
    </Ad>
    );
}

export default AdSection;