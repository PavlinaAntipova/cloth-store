import AdSection from 'components/AdSection';
import Newsletter from '../components/Newsletter';

const NewsletterPage = ({offers}) => {
    return (<>
        <Newsletter />
        <AdSection offers={offers} />
        </>
    );
}

export default NewsletterPage;