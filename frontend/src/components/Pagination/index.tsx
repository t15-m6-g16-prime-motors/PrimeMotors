import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useCar } from '../../hooks';
import { useEffect, useState } from 'react';
import StyledPaginationComponent from './style';

const PaginationComponent = () => {
  const { allCars, setCarPerPage } = useCar();
  console.log(
    allCars.sort((a, b) => {
      return a.id - b.id;
    })
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage: number = 2;


  console.log(
    allCars.slice(perPage * (currentPage - 1), perPage * currentPage)
  );

  useEffect(() => {
    setTotalPages(Math.ceil(allCars.length / perPage));
    setCarPerPage([
      ...allCars.slice(perPage * (currentPage - 1), perPage * currentPage)
    ]);
  }, [allCars, currentPage]);

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
