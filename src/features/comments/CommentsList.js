import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import Comment from "./Comment";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CommentForm from './CommentForm';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({campsiteId}) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);

    if(isLoading) {
        return <Loading/>
    }
    if(errMsg){
        return <Error errMsg={errMsg}/>
    }
    if(comments && comments.length>0){
        return (
            <Col  className="m-1" md='5'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment}/>
                })
                }
                <CommentForm campsiteId={campsiteId}/>
            </Col>
        )
    }
    return(
        <Col md='5' className="m-1">
            There are no comments for this campsite just yet.
        </Col>
    )
}

export default CommentsList;