import React from 'react';
import PropTypes from 'prop-types';

function TechItem ({tech, onDelete}){
  return (
    <li className="tech">
      {tech}
      <button 
        type="button" 
        className="btn-trash-tech"
        onClick={() => onDelete()}
      >
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </li>
  );
}

TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;