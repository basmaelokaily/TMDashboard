import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const Pagination = ({
  pageNumber,
  setPageNumber,
  totalPages,
}: PaginationProps) => {
  const handleNext = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevious = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPageNumber(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, pageNumber - 2);
      let endPage = Math.min(totalPages, pageNumber + 2);

      if (pageNumber <= 3) {
        endPage = Math.min(5, totalPages);
      } else if (pageNumber >= totalPages - 2) {
        startPage = Math.max(totalPages - 4, 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (startPage > 1) {
        pages.unshift("...");
        pages.unshift(1);
      }
      if (endPage < totalPages) {
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-border">
      {/* Mobile version */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={handlePrevious}
          disabled={pageNumber === 1}
          className={`px-4 py-2 text-sm font-medium rounded-lg ${
            pageNumber === 1
              ? "bg-surface-hover text-text-secondary cursor-not-allowed"
              : "bg-surface text-text-primary hover:bg-surface-hover border border-border"
          }`}
        >
          Previous
        </button>
        <span className="text-sm text-text-secondary px-4 py-2">
          Page {pageNumber} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={pageNumber === totalPages}
          className={`px-4 py-2 text-sm font-medium rounded-lg ${
            pageNumber === totalPages
              ? "bg-surface-hover text-text-secondary cursor-not-allowed"
              : "bg-surface text-text-primary hover:bg-surface-hover border border-border"
          }`}
        >
          Next
        </button>
      </div>

      {/* Desktop version */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="text-sm text-text-secondary">
          Page {pageNumber} of {totalPages}
        </div>

        <div className="flex gap-2">
          {/* Previous button */}
          <button
            onClick={handlePrevious}
            disabled={pageNumber === 1}
            className={`p-2 rounded-lg border ${
              pageNumber === 1
                ? "border-border text-text-secondary cursor-not-allowed"
                : "border-border text-text-primary hover:bg-surface-hover hover:border-primary transition-colors"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Page numbers */}
          <div className="flex gap-2">
            {pageNumbers.map((page, index) => (
              <React.Fragment key={index}>
                {page === "..." ? (
                  <span className="flex items-center justify-center w-10 h-10 text-text-secondary">
                    ...
                  </span>
                ) : (
                  <button
                    onClick={() => goToPage(page as number)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium border transition-colors ${
                      pageNumber === page
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-border text-text-primary hover:bg-surface-hover hover:border-primary"
                    }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={pageNumber === totalPages}
            className={`p-2 rounded-lg border ${
              pageNumber === totalPages
                ? "border-border text-text-secondary cursor-not-allowed"
                : "border-border text-text-primary hover:bg-surface-hover hover:border-primary transition-colors"
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
