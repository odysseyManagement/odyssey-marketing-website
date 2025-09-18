import { Link } from "react-router-dom";

interface Blog {
    id: number;
    thumb: string;
    title: string;
    date: string;
}

interface SingleRecentPostProps {
    blog: Blog;
}

const SingleRecentPost: React.FC<SingleRecentPostProps> = ({ blog }) => {
    const { id, thumb, title, date, slug } = blog;

    const truncateString = (str: string): string => {
        if (str.length <= 47) {
            return str;
        }
        return `${str.slice(0, 47)} ...`;
    };

    const truncatedTitle = truncateString(title);

    return (
        <li>
            <div className="thumb">
                <Link to={`/blog/${slug}`}>
                    <img src={`/assets/img/ms/${thumb}`} width={500} height={500} alt="Thumb" />
                </Link>
            </div>
            <div className="info">
                <div className="meta-title">
                    <span className="post-date">{date}</span>
                </div>
                <Link to={`/blog/${slug}`}>{truncatedTitle}</Link>
            </div>
        </li>
    );
};

export default SingleRecentPost;