export async function fetchDoctors(
  page = 1,
  limit = 10,
  filters: {
    consultMode?: string[];
    experienceYears?: number[];
    fees?: string[];
    languages?: string[];
  } = {}
) {
  const res = await fetch(`http://localhost:5000/api/doctors/list-doctor-with-filter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      page,
      limit,
      filters,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch doctors");
  }

  const json = await res.json(); // { doctors, total }
  return {
    data: json.doctors,
    total: json.total,
  };
}
