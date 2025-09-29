import { Helmet } from 'react-helmet-async';
import BlogWithSidebarContent from '../../components/blog/BlogWithSidebarContent';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import DarkClass from '../../components/classes/DarkClass';
import LayoutV1 from '../../components/layouts/LayoutV1';

const BlogWithSidebarPage = () => {
    return (
        <>
<meta name="description" content="Explore the Odyssey Management Group blog for expert tips on OnlyFans management, social media growth, influencer marketing, and strategies to help creators succeed online." />

            <Helmet>
                <title>Odyssey Management Group - Blog</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Our Blog' breadCrumb='blog-with-sidebar' />
                <BlogWithSidebarContent sectionClass="default-padding-bottom" />
                <DarkClass />

            </LayoutV1>
        </>
    );
};

export default BlogWithSidebarPage;