import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import BlogV3Data from "../../../src/assets/jsonData/blog/BlogData.json";
import BlogSingleWithSidebarContent from "../../components/blog/BlogSingleWithSidebarContent";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const BlogSingleWithSidebarPage = () => {

    const { slug } = useParams();
    const data = BlogV3Data.find(portfolio => portfolio.slug === slug);

    return (
        <>
<meta name="description" content="Explore the Odyssey Management Group blog for expert tips on OnlyFans management, social media growth, influencer marketing, and strategies to help creators succeed online." />

            <Helmet>
                {data && <title>{data.title} - Odyssey Management Group</title>}
            </Helmet>

            <LayoutV1>
                {data && <Breadcrumb title={data.title} breadCrumb='blog-single-with-sidebar' />}
                {data && <BlogSingleWithSidebarContent sectionClass='default-padding-bottom' blogInfo={data} totalBlogs={BlogV3Data.length} />}
                <DarkClass />

            </LayoutV1>
        </>
    );
};

export default BlogSingleWithSidebarPage;