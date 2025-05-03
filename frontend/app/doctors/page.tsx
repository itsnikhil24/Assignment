// app/doctors/page.tsx
"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import DoctorCard from "../../components/DoctorCard";
import FilterSidebar from "../../components/FilterSidebar";
import { fetchDoctors } from "../../lib/api";
import Header from "../../components/Header";
import DoctorListHeader from "../../components/DoctorListHeader";
import { Doctor } from "../../types/doctor";

const ITEMS_PER_PAGE = 10;

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    consultMode: [],
    experienceYears: [],
    fees: [],
    languages: [],
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadDoctors = useCallback(async () => {
    if (!hasMore) return;
    setLoading(true);
    try {
      const data = await fetchDoctors(page, ITEMS_PER_PAGE, filters);
      setDoctors((prev) => (page === 1 ? data.data : [...prev, ...data.data]));
      setHasMore(data.data.length === ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  }, [page, filters, hasMore]);

  useEffect(() => {
    loadDoctors();
  }, [loadDoctors]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, loading]);

  const handleFilterChange = (type: string, value: any) => {
    setDoctors([]);
    setPage(1);
    setHasMore(true);
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleClearFilters = () => {
    setDoctors([]);
    setPage(1);
    setHasMore(true);
    setFilters({
      consultMode: [],
      experienceYears: [],
      fees: [],
      languages: [],
    });
  };

  return (
    <div>
      <Header />
      <main className="flex">
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />
        <div className="flex-1 p-4">
          <DoctorListHeader totalCount={doctors.length} onSortChange={() => {}} />

          {doctors.length === 0 && !loading ? (
            <p>No doctors found</p>
          ) : (
            <>
              {doctors.map((doc, i) => (
                <DoctorCard key={i} doctor={doc} />
              ))}

              <div ref={observerRef} className="h-10" />
              {loading && <p className="text-center mt-4">Loading more doctors...</p>}
            </>
          )}
        </div>
      </main>
    </div>
  );
}