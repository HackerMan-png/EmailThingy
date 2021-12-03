const url = '/api/v1/products';
const fileFormDOM = document.querySelector('.file-form');

const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const imageInput = document.querySelector('#image');
const resetPassword = document.getElementById('passReset');

const container = document.querySelector('.container');
let imageValue;

resetPassword.addEventListener('click', async (e) => {
  try {
    await axios.get('/reset');
  } catch (error) {
    console.log(error);
  }
});

imageInput.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0];
  const formData = new FormData();
  formData.append('image', imageFile);
  // console.log([...formData.keys()]);

  try {
    const {
      data: {
        image: { src },
      },
    } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
    imageValue = src;
  } catch (err) {}
});
