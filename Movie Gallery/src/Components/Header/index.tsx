import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.scss";

function DropdownHeader() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Opções">
      <Dropdown.Item href="#/action-1">Filmes mais populares</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Filmes mais bem avaliados</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Filmes em cartaz</Dropdown.Item>
    </DropdownButton>
  );
}

function SearchBar() {
  return (
    <>
      <InputGroup className="mb-3 search-bar">
        <InputGroup.Text>
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control placeholder="Pesquisar..." aria-label="pesquisa" />
      </InputGroup>
    </>
  );
}

export default function Header() {
  return (
    <>
      <header className="d-flex justify-content-between py-3 mb-3 border-bottom header">
        <DropdownHeader />
        <SearchBar />
      </header>
    </>
  );
}
