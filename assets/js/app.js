const product_show = document.getElementById('table-product');
const Product_upolad = document.getElementById('Product_upolad');
const mancatagory = document.getElementById('mancatagory');
const Womencatagory = document.getElementById('Womencatagory');
const kidscatagory = document.getElementById('kidscatagory');
const electroniccatagory = document.getElementById(
  'electroniccatagory'
);
const man = document.getElementById('man');
const women = document.getElementById('Women');
const kids = document.getElementById('kids');
const electronics = document.getElementById('electronics');
const Shop = document.getElementById('shop');
const view = document.querySelectorAll('.view');
const product_view = document.getElementById('product_view');

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
            <td>${element.regular_price}</td>
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

//=======================================================================>  catagory start
const catagoryproduct = async () => {
  try {
    await axios
      .get('http://localhost:8080/api/v1/product')

      .then((res) => {
        list = '';
        Womenlist = '';
        kidslist = '';
        electronicslist = '';
        res.data.forEach((element) => {
          if (element.catagory == 'man') {
            list += `
            <div class="col-md-4 py-2">
            <div class="card">
                <div class="card-body" >
                    <div class="man">
                        <img class="card-img" style="height:200px;" src="http://127.0.0.1:8080/images/${element.photo}" alt="">
                          
                        <span class="h6 pt-2 d-inline-block">${element.name}</span>
                    <div class="price d-flex">
                        <span class="h6">Price :</span>
                        <del>  ${element.regular_price} BDT</del>
                        <span class =" ps-1">${element.sale_price} BDT</span>
                    </div>
                    </div>
                    
                </div>
               
                    
            </div>
        </div>                     
            `;
          }

          if (element.catagory == 'women') {
            Womenlist += `
            <div class="col-md-4 py-2">
            <div class="card">
                <div class="card-body" >
                    <div class="man">
                        <img class="card-img" style="height:200px;" src="http://127.0.0.1:8080/images/${element.photo}" alt="">
                          
                        <span class="h6 pt-2 d-inline-block">${element.name}</span>
                    <div class="price d-flex">
                        <span class="h6">Price :</span>
                        <del>  ${element.regular_price} BDT</del>
                        <span class =" ps-1">${element.sale_price} BDT</span>
                    </div>
                    </div>
                    
                </div>
               
                    
            </div>
        </div>     
               
            `;
          }
          if (element.catagory == 'kids') {
            kidslist += `
            <div class="col-md-4 py-2">
            <div class="card">
                <div class="card-body" >
                    <div class="man">
                        <img class="card-img" style="height:200px;" src="http://127.0.0.1:8080/images/${element.photo}" alt="">
                          
                        <span class="h6 pt-2 d-inline-block">${element.name}</span>
                    <div class="price d-flex">
                        <span class="h6">Price :</span>
                        <del>  ${element.regular_price} BDT</del>
                        <span class =" ps-1">${element.sale_price} BDT</span>
                    </div>
                    </div>
                    
                </div>
               
                    
            </div>
        </div>     
               
            `;
          }
          if (element.catagory == 'electronics') {
            electronicslist += `
            <div class="col-md-4 py-2">
            <div class="card">
                <div class="card-body" >
                    <div class="man">
                        <img class="card-img" style="height:200px;" src="http://127.0.0.1:8080/images/${element.photo}" alt="">
                          
                        <span class="h6 pt-2 d-inline-block">${element.name}</span>
                    <div class="price d-flex">
                        <span class="h6">Price :</span>
                        <del>  ${element.regular_price} BDT</del>
                        <span class =" ps-1">${element.sale_price} BDT</span>
                    </div>
                    </div>
                    
                </div>
               
                    
            </div>
        </div>     
               
            `;
          }
        });
        mancatagory.innerHTML = list;
        Womencatagory.innerHTML = Womenlist;
        kidscatagory.innerHTML = kidslist;
        electroniccatagory.innerHTML = electronicslist;
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};
catagoryproduct();

//=======================================================================>  catagory end

//=======================================================================>   shop start

const shopproduct = async () => {
  try {
    await axios
      .get('http://localhost:8080/api/v1/product')

      .then((res) => {
        list = '';
        res.data.forEach((element) => {
          list += `
              <div class="col-md-3 text-center  shadow-sm py-3">
              <img style="height:220px" class="card-img-top" src="http://127.0.0.1:8080/images/${element.photo}" alt="">
              <h6 class="text-center my-1">Price:${element.sale_price} BDT</h6>
              <div class="btn-group">
                  <button class="btn btn-sm btn-primary view" data-bs-toggle="modal" id="${element.id}" data-bs-target="#modalId" >View</button>
                  <button class="btn btn-sm mx-1 btn-warning">Add to Cart</button>
              </div>
          </div>
            `;
        });
        Shop.innerHTML = list;
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};
shopproduct();

//=======================================================================>   shop end

//===========================================================> home page Man catagory
const mancatagoryproduct = async () => {
  try {
    await axios
      .get('http://localhost:8080/api/v1/product')

      .then((res) => {
        list = '';

        res.data.forEach((element) => {
          if (element.catagory == 'man') {
            list += `
            <div class="col-md-4 py-2">
            <div class="card">
                <div class="card-body" >
                    <div class="man">
                        <img class="card-img" style="height:200px;" src="http://127.0.0.1:8080/images/${element.photo}" alt="">
                          
                        <span class="h6 pt-2 d-inline-block">${element.name}</span>
                    <div class="price d-flex">
                        <span class="h6">Price :</span>
                        <del>  ${element.regular_price} BDT</del>
                        <span class =" ps-1">${element.sale_price} BDT</span>
                    </div>
                    </div>
                    
                </div>
               
                    
            </div>
        </div>                     
            `;
          }
        });
        man.innerHTML = list;
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};
mancatagoryproduct();

//===========================================================> home page Women catagory
const womencatagoryproduct = async () => {
  try {
    await axios
      .get('http://localhost:8080/api/v1/product')

      .then((res) => {
        Womenlist = '';

        res.data.forEach((element) => {
          if (element.catagory == 'women') {
            Womenlist += `
            <div class="col-md-4 py-2">
            <div class="card">
                <div class="card-body" >
                    <div class="man">
                        <img class="card-img" style="height:200px;" src="http://127.0.0.1:8080/images/${element.photo}" alt="">
                          
                        <span class="h6 pt-2 d-inline-block">${element.name}</span>
                    <div class="price d-flex">
                        <span class="h6">Price :</span>
                        <del>  ${element.regular_price} BDT</del>
                        <span class =" ps-1">${element.sale_price} BDT</span>
                    </div>
                    </div>
                    
                </div>
               
                    
            </div>
        </div>     
               
            `;
          }
        });

        women.innerHTML = Womenlist;
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};
womencatagoryproduct();

//===========================================================> home page Kids catagory
const kidscatagoryproduct = async () => {
  try {
    await axios
      .get('http://localhost:8080/api/v1/product')

      .then((res) => {
        kidslist = '';

        res.data.forEach((element) => {
          if (element.catagory == 'kids') {
            kidslist += `
            <div class="col-md-4 py-2">
            <div class="card">
                <div class="card-body" >
                    <div class="man">
                        <img class="card-img" style="height:200px;" src="http://127.0.0.1:8080/images/${element.photo}" alt="">
                          
                        <span class="h6 pt-2 d-inline-block">${element.name}</span>
                    <div class="price d-flex">
                        <span class="h6">Price :</span>
                        <del>  ${element.regular_price} BDT</del>
                        <span class =" ps-1">${element.sale_price} BDT</span>
                    </div>
                    </div>
                    
                </div>
               
                    
            </div>
        </div>     
               
            `;
          }
        });

        kids.innerHTML = kidslist;
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};
kidscatagoryproduct();

//===========================================================> home page Man catagory
const electronicscatagoryproduct = async () => {
  try {
    await axios
      .get('http://localhost:8080/api/v1/product')

      .then((res) => {
        electronicslist = '';
        res.data.forEach((element) => {
          if (element.catagory == 'electronics') {
            electronicslist += `
            <div class="col-md-4 py-2">
            <div class="card">
                <div class="card-body" >
                    <div class="man">
                        <img class="card-img" style="height:200px;" src="http://127.0.0.1:8080/images/${element.photo}" alt="">
                          
                        <span class="h6 pt-2 d-inline-block">${element.name}</span>
                    <div class="price d-flex">
                        <span class="h6">Price :</span>
                        <del>  ${element.regular_price} BDT</del>
                        <span class =" ps-1">${element.sale_price} BDT</span>
                    </div>
                    </div>
                    
                </div>
               
                    
            </div>
        </div>     
               
            `;
          }
        });

        electronics.innerHTML = electronicslist;
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (err) {
    console.log(err.message);
  }
};
electronicscatagoryproduct();
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
  getAllproduct();
};

// //======================================================================> view product START

// Shop.onclick = async (e) => {
//   if (e.target.classList.contains('view')) {
//     const id = e.target.getAttribute('id');

//     try {
//       await axios
//         .get('http://localhost:8080/api/v1/product/id')
//         .then((res) => {
//           const { name, regular_price, sale_price, photo, gallary } =
//             res.data;

//           product_view.innerHTML = `
//             <div class="row">
//             <div class="col-md-6">
//                 <img src="http://127.0.0.1:8080/images/${element.photo}" class="card-img-top" alt="">
//             </div>
//             <div class="col-md-6">
//                 <p class="h3">${name}</p>
//                 <p class="h6">Price ${sale_price} BDT</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolorum </p>
//                 <button class="btn btn-warning">Add to Cart</button>
//             </div>
//         </div>

//             `;
//         });
//       console.log(viewData).catch((err) => console.log(err));
//     } catch {
//       (err) => {
//         err.message;
//       };
//     }
//   }
// };

// //======================================================================> view product START
