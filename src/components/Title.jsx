const Title = ({ text, subtitle }) => {
    return (
        <div className="page-heading">
            <h1 className="title">{text}</h1>
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
    );
};

export default Title;
