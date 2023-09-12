import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2>Book Marks {bookmarks.length}</h2>
            {
                bookmarks.map((value,idx)=><Bookmark key={idx} bookmark={value}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array
}

export default Bookmarks;