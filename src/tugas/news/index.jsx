import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Index extends Component {
  state = {
    setData: [],
    searchData: [],
  };

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=879a5c8344cb4ee5b90ece64f360824f`).then((res) => {
      const setData = res.data.articles;
      this.setState({ setData });
    });
  }
  catch(error) {
    console.log(error);
  }

  onchang = (e) => {
    const { setData } = this.state;
    let resultArray = [];
    for (let i = 0; i < setData.length; i++) {
      if (setData[i].title.includes(e.target.value)) {
        resultArray.push(setData[i]);
        console.log(setData[i]);
      }
    }
    this.setState({ searchData: resultArray });
  };

  render() {
    const { searchData, setData } = this.state;
    return (
      <div className="card p-5">
        <h1 className="text-center">List Berita</h1>
        <Form.Control className="me-auto mb-3" placeholder="Add your Berita here..." onChange={this.onchang} />
        <Row md={1}>
          {setData &&
            searchData.map((person, index) => (
              <Col style={{ width: "24.5%", border: "1px solid", margin: "3px" }} key={index}>
                <img src={person.urlToImage} className="top" style={{ width: "100%" }} alt="img"></img>
                <h4 className="card-title">{person.title}</h4>
                <h6>
                  {person.author} - {person.publishedAt}
                </h6>
                <br />
                <p className="card-text">{person.content}</p>
                <a href={person.url} className="btn btn-primary w-100">
                  Read More.....
                </a>
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}
export default Index;
