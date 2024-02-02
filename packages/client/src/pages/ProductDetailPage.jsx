import React from "react";
import { Container } from "react-bootstrap";
import { ErrorBoundary, LoadingSpinner, ProductBox } from "../components";
import { useAxios } from "../hooks";
import { useParams } from "react-router-dom";
function ProductDetailPage() {
  const { pid } = useParams();

  const { data, loading, error } = useAxios({
    config: { url: `products/${pid}` },
  });

  return (
    <Container className="h-100">
      <ErrorBoundary>
        {error ? (
          <p>Error...</p>
        ) : (
          (() => {
            switch (loading) {
              case false:
                return <ProductBox product={data} />;
              case true:
                return <LoadingSpinner full />;
              default:
                return null;
            }
          })()
        )}
      </ErrorBoundary>
    </Container>
  );
}

export default ProductDetailPage;
