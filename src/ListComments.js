import React from 'react'
import PropTypes from 'prop-types'

function ListComments(props) {
    const { comments, onDeleteComment } = props

    return (
        <ol className='comment-list' >
            {comments.map((comment, i) => (
                <li key={i} className='comment-list-item'>
                    <div className='comment-details'>
                        <p>{comment}</p>
                    </div>
                    <button onClick={() => onDeleteComment(comment)} className='comment-remove'>
                        Remove
                    </button>
                </li>
            ))
            }
        </ol>
    )
}

ListComments.propTypes = {
    comments: PropTypes.array.isRequired,
    onDeleteComment: PropTypes.func.isRequired
}

export default ListComments