import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useEffect, useState } from "react";

function Index() {
  const [data, setData] = useState(null);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=879a5c8344cb4ee5b90ece64f360824f`);
      //   console.log(response.data.articles);
      setData(response.data.articles);
      setSearchData(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  function reRender(e) {
    let resultArray = [];
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i]);
      if (data[i].title.includes(e.target.value)) {
        resultArray.push(data[i]);
      }
    }
    setSearchData(resultArray);
  }

  return (
    <div className="card p-5">
      <h1 className="text-center">Berita Hari Ini</h1>
      <Form.Control className="me-auto mb-3" placeholder="add your berita here" onChange={reRender} />
      <Row md={1}>
        {setData &&
          searchData.map((el, index) => (
            <Col style={{ width: "24.5%", border: "1px solid", margin: "3px" }} key={index}>
              <img src={el.urlToImage} className="top" style={{ width: "100%" }} alt="img"></img>
              <h4 className="card-title">{el.title}</h4>
              <h6>
                {el.author} - {el.publishedAt}
              </h6>
              <br />
              <p className="card-text">{el.content}</p>
              <a href={el.url} className="btn btn-primary w-100">
                Read More.....
              </a>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Index;
