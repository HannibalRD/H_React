import  PropTypes  from 'prop-types';


export const Firstapp = ({subTitle, title}) => {

    return (
        <>
        <h1>{subTitle +1 }</h1>
            <p>{title}</p>
        </>
    

    );
}

Firstapp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}