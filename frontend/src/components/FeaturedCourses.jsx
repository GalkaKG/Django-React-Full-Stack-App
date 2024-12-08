import React, { useState, useEffect } from "react";
import "./styles/FeaturedCourses.scss";
import api from "../services/api";

function FeaturedCourses() {
  // State for holding courses, sorting, and loading status
  const [courses, setCourses] = useState([]);
  const [sortBy, setSortBy] = useState("created_at"); // Default to sorting by creation date
  const [loading, setLoading] = useState(true);

  // Fetch courses based on sort criteria
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await api.get(`api/c/courses/?sort_by=${sortBy}`);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [sortBy]); // Fetch again whenever the sorting criteria change

  // Handle sort change
  const handleSortChange = (event) => {
    setSortBy(event.target.value); // Update the sorting option
  };

  const formatDownloadCount = (downloadCount) => {
    return downloadCount ? downloadCount : 0; // Return 0 if downloadCount is falsy
  };

  return (
    <div className="featured-courses">
      <h2>Featured Courses & Workshops</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label htmlFor="sort-by">Sort By: </label>
        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="created_at">Newest</option>
          <option value="downloads">Downloads</option>
        </select>
      </div>

      {/* Courses display */}
      <div className="courses">
        {loading ? (
          <div>Loading...</div>
        ) : (
          courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <p>Downloads: {formatDownloadCount(course.download_count)}</p>
                <span>
                  Created: {new Date(course.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FeaturedCourses;
