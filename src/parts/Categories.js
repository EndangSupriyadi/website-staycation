import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function Categories({ data }) {
  console.log(data)
  if (!data || data.length === 0) {
    return null; // Tidak ada data atau data kosong, tidak perlu memproses lebih lanjut
  }

  return data.map((category, index1) => {
    if (!category.itemId || category.itemId.length === 0) {
      return null; // Tidak ada item dalam kategori, tidak perlu memproses lebih lanjut
    }

    return (
      <section className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, index2) => {
              // Pastikan bahwa item.imageId[0] terdefinisi sebelum mencoba mengakses properti imageUrl
              const imageUrl = item.imageId && item.imageId[0] ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}` : "";

              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={imageUrl}
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          className="stretched-link d-block text-gray-800"
                          href={`/properties/${item._id}`}
                        >
                          <h5 className="h4">{item.title}</h5>
                        </Button>
                        <span className="text-gray-500">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </Fade>
      </section>
    );
  });
}
