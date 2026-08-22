"use client";

import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
  showSummary?: boolean;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  showSummary = true,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Calculate items range text
  const startItem = totalItems && itemsPerPage ? (currentPage - 1) * itemsPerPage + 1 : null;
  const endItem =
    totalItems && itemsPerPage ? Math.min(currentPage * itemsPerPage, totalItems) : null;

  // Helper to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show page 1
      pages.push(1);

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        end = 4;
      } else if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }

      if (start > 2) {
        pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      aria-label="Pagination Navigation"
      className={`mt-10 sm:mt-14 flex flex-col items-center gap-4 sm:gap-6 ${className}`}
    >

      <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-white border border-[#e8eee7] shadow-sm">
        <button
          type="button"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-label="Go to first page"
          className="no-animate flex h-9 w-9 items-center justify-center rounded-xl text-[#16351d] transition-all duration-200 hover:bg-[#f0f4ef] hover:text-[#2c7a3f] disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
        >
          <ChevronsLeft className="h-4 w-4 stroke-[2.2]" />
        </button>

   
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
          className="no-animate flex h-9 items-center gap-1 rounded-xl px-2.5 sm:px-3 text-xs font-semibold text-[#16351d] transition-all duration-200 hover:bg-[#f0f4ef] hover:text-[#2c7a3f] disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4 stroke-[2.2]" />
          <span className="hidden xs:inline">Prev</span>
        </button>


        <div className="flex items-center gap-1 px-1">
          {pages.map((page, idx) => {
            if (typeof page === "string") {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="flex h-9 w-7 items-center justify-center text-xs font-medium text-gray-400 select-none"
                >
                  •••
                </span>
              );
            }

            const isCurrent = page === currentPage;

            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`Page ${page}`}
                className={`no-animate flex h-9 min-w-9 items-center justify-center rounded-xl px-3 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? "bg-[#2c7a3f] text-white shadow-md shadow-[#2c7a3f]/20 scale-105"
                    : "text-[#16351d] hover:bg-[#f0f4ef] hover:text-[#2c7a3f] hover:border-[#d7e5d5]"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
          className="no-animate flex h-9 items-center gap-1 rounded-xl px-2.5 sm:px-3 text-xs font-semibold text-[#16351d] transition-all duration-200 hover:bg-[#f0f4ef] hover:text-[#2c7a3f] disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
        >
          <span className="hidden xs:inline">Next</span>
          <ChevronRight className="h-4 w-4 stroke-[2.2]" />
        </button>

        <button
          type="button"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Go to last page"
          className="no-animate flex h-9 w-9 items-center justify-center rounded-xl text-[#16351d] transition-all duration-200 hover:bg-[#f0f4ef] hover:text-[#2c7a3f] disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
        >
          <ChevronsRight className="h-4 w-4 stroke-[2.2]" />
        </button>
      </div>
    </nav>
  );
}
