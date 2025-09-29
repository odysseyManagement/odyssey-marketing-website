import { Helmet } from 'react-helmet-async';
import BlogStandardContent from '../../components/blog/BlogStandardContent';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import DarkClass from '../../components/classes/DarkClass';
import LayoutV1 from '../../components/layouts/LayoutV1';

const BlogStandardPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Blog Standard</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blog Standard' breadCrumb='blog-standard' />
                <BlogStandardContent sectionClass='default-padding-bottom' />
                <DarkClass />

            </LayoutV1>
        </>
    );
};

export default BlogStandardPage;