import { Link } from "react-router-dom";
import BlogV3Data from "../../../src/assets/jsonData/blog/BlogV3Data.json";
import { ContentRenderer } from "../ContentRender";
import ArchiveWidget from "../widgets/ArchiveWidget";
import CategoryWidget from "../widgets/CategoryWidget";
import FollowWidget from "../widgets/FollowWidget";
import GalleryWidget from "../widgets/GalleryWidget";
import RecentPostsWidget from "../widgets/RecentPostsWidget";
import SearchWidget from "../widgets/SearchWidget";
import TagsWidget from "../widgets/TagsWidget";

interface DataType {
  id?: number;
  date?: string;
  dateIcon?: string;
  thumbFull?: string;
  author?: string;
  content?: string;
  contentParagraphs?: string[];
  contentQuote?: string;
  contentList?: string[];
  title?: string;
  blocks?: any[];
}

interface BlogSingleProps {
  blogInfo?: DataType;
  totalBlogs?: number;
  sectionClass?: string;
}

const BlogSingleWithSidebarContent = ({
  blogInfo,
  totalBlogs,
  sectionClass,
}: BlogSingleProps) => {
  const {
    id,
    date,
    dateIcon,
    thumbFull,
    author,
    content,
    contentParagraphs,
    contentQuote,
    contentList,
    title,
    blocks,
  } = blogInfo || {};

  // Blogs Navigation
  const currentId = id ? parseInt(id.toString(), 10) : 1;

  // Calculate the previous and next IDs dynamically
  const previousId = currentId === 1 ? totalBlogs : currentId - 1;
  const nextId = currentId === totalBlogs ? 1 : currentId + 1;

  // Get the previous and next project titles
  const previousBlog = BlogV3Data.find((blog) => blog.id === previousId);
  const nextBlog = BlogV3Data.find((blog) => blog.id === nextId);

  // Get the first two words of the project title
  const getFirstTwoWords = (text?: string) =>
    text?.split(" ").slice(0, 2).join(" ") || "No Title";

  return (
    <>
      <div
        className={`blog-area single full-blog right-sidebar full-blog ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                {/* blog Single Post */}
                <div className="blog-style-one item">
                  <div className="blog-item-box">
                    <div className="thumb">
                      {thumbFull && (
                        <img
                          src={`/assets/img/ms/${thumbFull}`}
                          width={1075}
                          height={546}
                          alt="Thumb"
                        />
                      )}
                    </div>
                    <div className="info">
                      <div className="meta">
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="fas fa-user-circle" /> {author}
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className={dateIcon}></i> {date}
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <ContentRenderer
                        blocks={blogInfo?.blocks}
                        fallback={
                          <>
                            {/* legacy fallback using your old fields */}
                            {(Array.isArray(blogInfo?.content)
                              ? blogInfo?.content
                              : blogInfo?.contentParagraphs
                            )?.map((p, i) => (
                              <p key={`legacy-p-${i}`}>{p}</p>
                            ))}
                            {typeof blogInfo?.content === "string" && (
                              <p>{blogInfo?.content}</p>
                            )}
                            {blogInfo?.contentQuote && (
                              <blockquote>{blogInfo.contentQuote}</blockquote>
                            )}
                            {blogInfo?.contentList?.length ? (
                              <>
                                <h3>Key points</h3>
                                <ul>
                                  {blogInfo.contentList.map((li, i) => (
                                    <li key={i}>{li}</li>
                                  ))}
                                </ul>
                              </>
                            ) : null}
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Post Author */}
                {/*      <div className="post-author">
                                    <div className="thumb">
                                        <img src={team1Thumb} alt="Thumb" />
                                    </div>
                                    <div className="info">
                                        <h4><Link to="#" onClick={handleSmoothScroll}>Md Sohag</Link></h4>
                                        <p>
                                            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.
                                        </p>
                                    </div>
                                </div> */}

                {/* Post Pagination */}
                {/*   <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link to={`/blog-single-with-sidebar/${previousId}`}>
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title"> Previous Post <h5>{getFirstTwoWords(previousBlog?.title)}</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link to={`/blog-single-with-sidebar/${nextId}`}>
                                            <div className="nav-title">Next Post <h5>{getFirstTwoWords(nextBlog?.title)}</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div> */}

                {/* Start Blog Comment */}
                {/*         <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                            <BlogPostComments />
                                        </div>
                                        <div className="comments-form">
                                            <div className="title">
                                                <h3>Leave a comments</h3>
                                            </div>
                                            <BlogCommentForm />
                                        </div>
                                    </div>
                                </div> */}
              </div>

              <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                <aside>
                  <SearchWidget />
                  <RecentPostsWidget />
                  <CategoryWidget />
                  <GalleryWidget />
                  <ArchiveWidget />
                  <FollowWidget />
                  <TagsWidget />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleWithSidebarContent;
