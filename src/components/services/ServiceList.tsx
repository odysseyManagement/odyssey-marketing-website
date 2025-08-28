interface DataType {
    id?: number;
    serviceName?: string;
    count?: string;
        desc?: string;
}

const ServiceList = ({ service }: { service: DataType }) => {
    const { serviceName, count, desc } = service


    return (
        <>
            <div className="icon">
                <i className="fas fa-long-arrow-right" />
            </div>
            <span>{count}</span>
              <h4 >{serviceName}</h4>
   <div>{desc}</div>
        </>
    );
};

export default ServiceList;