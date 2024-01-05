import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) => {
  let course = props.course;
  console.log("inside card");

  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      //previously liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning(`${course.title} Removed From Liked`);
    } else {
      //not liked previously
      //insert this course in likedCourse
      if (likedCourses.length == 0) {
        setLikedCourses([course.id]);
      } else {
        //non-empty
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success(`${course.title} Liked`);
    }
  };
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {!likedCourses.includes(course.id) ? (
              <FcLikePlaceholder fontSize="1.75rem" />
            ) : (
              <FcLike fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
