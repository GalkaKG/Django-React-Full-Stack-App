import React from "react";

function FeaturedCourses() {
  return (
    <div className="featured-courses">
      <h2>Featured Courses & Workshops</h2>
      <div className="courses">
        {/* Add course cards dynamically */}
        <div className="course-card">Course 1</div>
        <div className="course-card">Course 2</div>
        <div className="course-card">Course 3</div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
