import './BaseView.css';

const BaseView = (props) => {

    const { title } = props;

    return (
        <>
            <h1 className="base__title">{title}</h1>
            {props.children}
        </>
    )
}

export default BaseView;