import React from 'react'

const CommentItem = ({comment}) => {
    console.log(comment.comments);
  return (
    <div>
        <div>

        </div>
        <div>
            <div>
                {comment.comments}
            </div>
        </div>
    </div>
  )
}

export default CommentItem