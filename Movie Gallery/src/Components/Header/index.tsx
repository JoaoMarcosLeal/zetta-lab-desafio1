import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.scss";

function SearchBar() {
  return (
    <>
      <InputGroup className="mb-3 search-bar">
        <InputGroup.Text id="basic-addon1">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="Pesquisar..."
          aria-label="pesquisa"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}

export default function Header() {
  return (
    <>
      <header className="d-flex py-3 mb-3 border-bottom header">
        <SearchBar />
      </header>
    </>
  );
}
