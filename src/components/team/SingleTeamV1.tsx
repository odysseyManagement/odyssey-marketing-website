
interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    designation?: string;
}

const SingleTeamV1 = ({ team }: { team: DataType }) => {
    const { id, thumb, name, designation } = team

    return (
        <>
            <div className="">
                <div className="thumb">

                        <img src={`${thumb}`} alt="Image Not Found"   className="img-fluid object-fit-cover" width={300} height={315} />

                  {/*   <div className="social-overlay">

                        <div className="icon">
                            <i className="fas fa-plus" />
                        </div>
                    </div> */}
                </div>
                <div className="info">
                  {/*   <h4><Link to={`/team-details/${id}`}>{name}</Link></h4> */}
                    <h4>{name}</h4>
                    <span>{designation}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;