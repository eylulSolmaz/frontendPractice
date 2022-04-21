import React from "react";
import students from "../assets/data/students.json";

const Header = () => {
  return (
    <div>
      {students.map((student, index) => {
        return (
          <ul key={index}>
            <li>
              {student.isim} adlı öğrencimiz {student.kurs} adlı kursumuza
              kayıtlıdır.
            </li>
          </ul>
        );
      })}
      <div>
        {students
          .filter((student) => student.yas > 15)
          .map((student) => (
            <li>{student.isim}</li>
          ))}
      </div>
    </div>
  );
};

export default Header;
