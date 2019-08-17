import React from 'react'
import PropTypes from 'prop-types'

function CreateComment(props) {
    const { query, updateQuery, handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className='create-comment-form'>
            <div className='create-comment-details'>
                <input
                    type='text'
                    placeholder='Comment'
                    value={query}
                    onChange={e => updateQuery(e.target.value)}
                ></input>
                <button>Add Comment</button>
            </div>
        </form>
    )
}

CreateComment.propTypes = {
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default CreateComment