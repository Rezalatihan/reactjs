import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Cardd() {
  return (
    <Row xs={1} md={4} className="m-1">
      <Col>
        <Card>
          <Card.Img variant="top" src="css.png" />
          <Card.Body>
            <Card.Title>CSS</Card.Title>
            <Card.Text>
              CSS adalah singkatan dari cascading style sheets, yaitu bahasa yang digunakan untuk menentukan tampilan dan format halaman website. Dengan CSS, Anda bisa mengatur jenis font, warna tulisan, dan latar belakang halaman.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="klipartz.com.png" />
          <Card.Body>
            <Card.Title>HTML</Card.Title>
            <Card.Text>
              HTML adalah bahasa yang digunakan untuk membuat halaman web. Bagi yang berkecimpung di dunia perangkat gadget dan ilmu komputer, pasti sudah tidak asing lagi dengan berbagai kode di dalamnya. HTML adalah kependekan dari
              Hypertext Markup Language.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="git.png" />
          <Card.Body>
            <Card.Title>Git Hub</Card.Title>
            <Card.Text>
              gitHub adalah platform khusus developer yang dibuat karena terinspirasi dari cara bekerja para programmer. Dari open source ke bisnis, kita bisa meng-host dan meninjau sebuah kode, mengelola project, dan membangun perangkat
              lunak bersama 56 juta lebih pengguna di seluruh dunia.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="React.png" />
          <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text>React JS adalah library JavaScript yang biasa digunakan saat membangun UI suatu website atau aplikasi web.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Cardd;
