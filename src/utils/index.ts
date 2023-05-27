const getPaginatedPages = (page: number, numberOfPages: number): number[] => {
  const _pagesArray: number[] = [];
  if (page > Math.floor(numberOfPages / 2)) {
    _pagesArray.push(1);
    _pagesArray.push(-1);
    // if current page isn't the last page or the second to the last page push the page before the current page, the current page and the page after the current page then another three dots and the last page
    if (page !== numberOfPages && page !== numberOfPages - 1) {
      _pagesArray.push(page - 1);
      _pagesArray.push(page);
      _pagesArray.push(page + 1);
      _pagesArray.push(-1);
      _pagesArray.push(numberOfPages);
    } else {
      // if current page is the last page or the second to the last page push the page before the current page, the current page and the last page
      for (let i = page - 1; i <= numberOfPages; i++) {
        _pagesArray.push(i);
      }
    }
  } else {
    _pagesArray.push(1);
    // if current page is the first page or the second page push the first page, the second page, the third page, three dots and the last page
    if (page === 1 || page === 2) {
      _pagesArray.push(2);
      _pagesArray.push(3);
    } else {
      _pagesArray.push(-1);
      for (let i = page - 1; i <= page + 1; i++) {
        _pagesArray.push(i);
      }
    }
    _pagesArray.push(-1);
    _pagesArray.push(numberOfPages);
  }

  return _pagesArray;
};

export { getPaginatedPages };
