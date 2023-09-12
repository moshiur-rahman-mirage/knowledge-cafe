import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingtime}) => {
    console.log(readingtime)
    return (
        <div className="md:w-1/3">
            <h2>Book Marks {bookmarks.length}</h2>
            <h2>Reading Time {readingtime}</h2>
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