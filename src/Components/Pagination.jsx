import React from 'react';
import { FaAngleLeft, FaAngleRight} from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
      
        return (
          <div className='flex justify-center items-center gap-5'>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaAngleLeft className='text-3xl'/>
            </button>
            {`Página ${currentPage} de ${totalPages}`}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaAngleRight className='text-3xl'/>
            </button>
          </div>
        );
};

export default Pagination;