import React from "react";
import { Container, Form, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function ProductsFilter({
  filterInput,
  filterSelect,
  searchInput,
  categories,
  onCheckboxChange,
}) {
  return (
    <Container>
      <Form>
        <div>
          <Form.Group className="mb-4">
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <FormControl
                placeholder="Filter"
                aria-label="Filter"
                value={searchInput}
                onChange={filterInput}
              />
            </InputGroup>
          </Form.Group>
        </div>
        <div>
          <Form.Select
            className="custom-select mb-4"
            style={{ width: "100%" }}
            onChange={filterSelect}
          >
            <option value="price-asc">Price Low to High</option>
            <option value="price-dsc">Price High to Low</option>
          </Form.Select>
        </div>

        <div className="my-3">
          <Form.Check
            type="checkbox"
            id="electronics"
            label="Electronics"
            checked={categories["electronics"]}
            onChange={onCheckboxChange}
          />

          <Form.Check
            type="checkbox"
            id="accessories"
            label="Accessories"
            checked={categories["accessories"]}
            onChange={onCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            id="decor"
            label="Decor"
            checked={categories["decor"]}
            onChange={onCheckboxChange}
          />
          <Form.Check
            type="checkbox"
            id="wellness"
            label="Wellness"
            checked={categories["wellness"]}
            onChange={onCheckboxChange}
          />
        </div>
      </Form>
    </Container>
  );
}

export default ProductsFilter;
