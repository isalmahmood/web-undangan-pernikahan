const scriptURL =
    'https://script.google.com/macros/s/AKfycbyciSjP-FFIyNi40Jc0S31-0qKODfW6giTd8n0bBNG__sE_QAeylrUyBsnw_kDVh8Z-yA/exec'
const form = document.forms['form-ucapan-pernikahan']
const btnKirim = document.querySelector('.btn__kirim')
const btnLoading = document.querySelector('.btn__loading')
let characterInput = document.getElementById('setCharacter')
// let statusAlert = false;

form.addEventListener('submit', e => {
    e.preventDefault()
    //ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then((response) => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            console.log('Success!', response)
            //reset form
            form.reset();
            // alert('Succes!', response);
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
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Pastikan Jaringan Internet Anda aktif.',
            })
            console.error('Error!', error.message)
        })
})