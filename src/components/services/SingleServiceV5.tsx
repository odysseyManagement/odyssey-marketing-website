import { Link } from "react-router-dom";
import useHoverEffect from "../../hooks/useHoverEffect";

interface DataType {
    id: number;
    number: string;
    title: string;
    thumb: string;
    slug: string;
}

const SingleServiceV5 = ({ service }: { service: DataType }) => {
    const { id, number, title, thumb, slug } = service;

    const { handleMouseMove, handleMouseLeave } = useHoverEffect();

    return (
        <>
            <li>
                <Link
                    to={`/services/${slug}`}
                    className="image-hover-item"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="item-content">
                        <span>{number}</span>
                        <Link to={`/services/${slug}`}>
                            <h2>{title}</h2>
                        </Link>
                    </div>

                </Link>
            </li>
        </>
    );
};

export default SingleServiceV5;