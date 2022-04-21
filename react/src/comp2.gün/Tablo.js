import React from "react";
import students from "../assets/data/students.json";

const Tablo = () => {
  const still = {
    color: "crimson",
    backgroundColor: "aquamarine",
    fontWeight: "bolder",
  };

  return (
    <div>
      <h1>Kursiyerler</h1>
      <table>
        <tr style={still}>
          <th>İsim</th>
          <th>Yaş</th>
          <th>Aldığı Kurs</th>
        </tr>

        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td style={{ ...still, color: "black" }}>{student.isim}</td>
                <td>{student.yas}</td>
                <td>{student.kurs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tablo;
