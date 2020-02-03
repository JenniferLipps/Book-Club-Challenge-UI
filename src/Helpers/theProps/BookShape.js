import PropTypes from 'prop-types';

const apiBookShape = PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    goodReadsId: PropTypes.number.isRequired
});

export default apiBookShape;
