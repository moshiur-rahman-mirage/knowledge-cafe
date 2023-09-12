import propTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h1> {title}</h1>
            Hello
        </div>
    );
};

Bookmark.propTypes={
    bookmark:propTypes.func
}

export default Bookmark;