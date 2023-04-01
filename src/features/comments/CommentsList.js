import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';

const CommentsList = ({ campsiteId }) => {
    const comments = selectCommentsByCampsiteId(campsiteId);

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Commnets</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment}/>
                })}
                <CommentForm campsiteId={campsiteId}></CommentForm>
            </Col>
        );
    };
    return (
        <Col md='5' className='m-1'>
            There are no commnets for this campsite yet.
        </Col>
    );
};

export default CommentsList;