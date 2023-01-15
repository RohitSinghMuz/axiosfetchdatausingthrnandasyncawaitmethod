import axios from "axios";
import React, { useEffect, useState } from "react";

const Asyncawaitaxios = () => {
  const [respdata, setdata] = useState([]);

  const getdata = async () => {
    try {
      let responsdata = await axios.get("https://fakestoreapi.com/products");
      setdata(responsdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
    console.log(respdata, "respdata");
  }, [respdata]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          margin: "10px auto",
        }}
      >
        {respdata?.map((item, index) => {
          return (
            <div
              style={{
                width: "290px",
                height: "450px",
                border: "1px solid grey",
                margin: "10px auto",
              }}
            >
              <img
                src={item.image}
                alt="srcimage"
                width="250px"
                height="250px"
              />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Asyncawaitaxios;
