import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SearchBar() {
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
