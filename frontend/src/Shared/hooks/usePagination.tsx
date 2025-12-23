import { useState } from "react";

export const usePagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(30);
  return { pageNumber, setPageNumber, totalPages, setTotalPages };
};
