"use client"
import React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  itemsPerPage: number
  onItemsPerPageChange: (count: number) => void
}

function AppPagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}: Props) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-between gap-4 w-full">
      {/* Pagination Buttons */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={currentPage === i + 1}
                onClick={() => onPageChange(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Items Per Page Selector */}
      <div className="flex items-center gap-2">
        <span className="text-gray-600">عدد الصفوف:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="border rounded-md px-2 py-1 text-sm"
        >
          {[5, 10, 20, 50].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default AppPagination
