const product_show = document.getElementById('table-product');
const Product_upolad = document.getElementById('Product_upolad');

//============================================================get all product with api

const getAllproduct = async () => {
  try {
    await axios
      .get('http://localhost:8080/api/v1/product')

      .then((res) => {
        list = '';
        res.data.forEach((element, index) => {
          list += `
            <tr>
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.reguler_price}</td>
            <td>${element.sale_price}</td>
            <td>${element.stock}</td>
            <td>
              <img style="width:50px;height:50px" src="http://127.0.0.1:8080/images/${
                element.photo
              }">
            </td>
            <td>${element.status}</td>
            <td>${element.action}</td>
          </tr>
            `;
        });
        product_show.innerHTML = list;
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};
getAllproduct();

//=======================================================================> create new product

Product_upolad.onsubmit = async (e) => {
  e.preventDefault();
  const formdata = new FormData(e.target);

  try {
    await axios
      .post('http://localhost:8080/api/v1/product', formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  } catch {
    (err) => {
      err.message;
    };
  }
};
