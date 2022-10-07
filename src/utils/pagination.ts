interface IOptions {
  pagesCount: number;
  isActive: number;
  list: number[];
}

export const getInitialList = (length: number) => Array.from({ length }).map((_, index) => index);

export const getPaginationList = (options: IOptions) => {
  const { list, isActive, pagesCount } = options;

  if (isActive > 2) {
    if (isActive < pagesCount - 2) {
      return list.map(item => item + (isActive - 2));
    }
    if (isActive < pagesCount - 1) {
      return list.map(item => item + (isActive - 3));
    }
    if (isActive < pagesCount) {
      return list.map(item => item + (isActive - 4));
    }
  }

  // if (isActive === firstPage && isActive - 2 >= 0) {
  //   return list.map(item => item - 2);
  // }

  // if (isActive === firstPage && isActive - 1 >= 0) {
  //   return list.map(item => item - 1);
  // }

  // if (isActive === lastPage && isActive + 2 < pagesCount) {    
  //   return list.map(item => item + 2);
  // }

  // if (isActive === lastPage && isActive + 1 < pagesCount) {
  //   return list.map(item => item + 1);
  // }

  return list;
};

