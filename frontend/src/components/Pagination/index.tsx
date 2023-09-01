import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useCar } from '../../hooks';
import { useEffect, useState } from 'react';
import StyledPaginationComponent from './style';

const PaginationComponent = () => {
  const { allCars } = useCar();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  console.log(allCars);

  useEffect(() => {
    setTotalPages(Math.ceil(allCars.length / 3));
  }, [allCars]);

  return (
    <StyledPaginationComponent>
      <div className='pagesAndButton heading-6-500'>
        <p>
          {currentPage} <span> de {totalPages}</span>
        </p>
        <div className='previousNextBtnContainer'>
          <button
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
            className={
              currentPage > 1
                ? 'heading-6-500'
                : 'pagination__button__disabled heading-6-500'
            }
          >
            <BiChevronLeft /> Anterior
          </button>

          <button
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }}
            className={
              currentPage < totalPages
                ? 'heading-6-500'
                : 'pagination__button__disabled heading-6-500'
            }
          >
            Seguinte <BiChevronRight />
          </button>
        </div>
      </div>
    </StyledPaginationComponent>
  );
};

export default PaginationComponent;
