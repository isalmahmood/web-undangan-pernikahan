const scriptURL =
    'https://script.google.com/macros/s/AKfycbwa40BJVfrpDebwinFBPXd3zZkCibwgmK6HEDXnWD40wOOadxYpwR2i3N-78S3DQBv4aA/exec'
const form = document.forms['form-ucapan-pernikahan']
const btnKirim = document.querySelector('.btn__kirim')
const btnLoading = document.querySelector('.btn__loading')
const boxComments = document.querySelector('.box__comments')
let characterInput = document.getElementById('setCharacter')
// let statusAlert = false;

fetchData();

form.addEventListener('submit', e => {
    e.preventDefault()
    //ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    // let idUcapan = document.getElementById('idUcapan');
          let tanggal = document.getElementById('tanggal');
        //   let dateForId = Date.now();
          let d = new Date();

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then((response) => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            console.log('Success!', response)
            fetchData();
            //reset form
            form.reset();
            // idUcapan.value = dateForId;
          tanggal.value = d.toString();
            characterInput.innerHTML = 0;
            // statusAlert = true;
            //       if(statusAlert == true) {
            Swal.fire({
                icon: 'success',
                title: 'Pesan Terkirim',
                text: 'Terima Kasih Atas Doanya',
                showConfirmButton: true,
                // timer: 1500
            })
        })
        .catch((error) => {
            characterInput.innerHTML = 0;
            // btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Pastikan Jaringan Internet Anda aktif.',
            })
            console.error('Error!', error.message)
        })
})

// get data ucapan
// $('document').ready(function () {
//     setInterval(function () { getData()}, 1000); // panggil setiap 10 detik
// }); 


    function fetchData() {
      let datas = [];
      let sortedData = [];
       let setData = document.getElementById('boxComments');
    fetch('https://script.google.com/macros/s/AKfycbwa40BJVfrpDebwinFBPXd3zZkCibwgmK6HEDXnWD40wOOadxYpwR2i3N-78S3DQBv4aA/exec')
    .then((response) => response.json())
    .then((data) => {
      datas = data.data;
      sortedData = [...datas].sort((a, b) => {
        return b.idUcapan.localeCompare(a.idUcapan);
      });
      datas = sortedData
      
        let output = ""
        let no =1;
        datas.forEach(el => {
            output += `
            <div `+(no++)+` class=" p-2 my-3 shadow chat__box" style="border-radius: 2mm;">
          <div>
            <div class="row bd-highlight ">
              <div class="col-6 bd-highlight">
                <h5 class="fw-bold mb-0">${el.NAMA}</h5>
              </div>
              <div class="col-6 d-flex justify-content-end bd-highlight" style="opacity: 50%;">
                <p class="mb-0" style="font-size: 10pt;">${el.tanggal}</p>
              </div>
            </div>
            <hr>
            <p class="mb-0" style="text-align: justify; color: black;"> ${el.UCAPAN}</p>
          </div>
          </div>
            `
        });
        setData.innerHTML = output
    })
  }
