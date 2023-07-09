    $(document).ready(function () {
        $('#send_form').on('click', function () {
            var input_blanter = document.getElementById('wa_email');

            /* Whatsapp Settings */
            var walink = 'https://web.whatsapp.com/send',
                phone = '6281370126262',
                nproduct = document.getElementById("nama_product").value,
                type2 = document.getElementById("type2").value,
                varian = document.getElementById("variannya").value,
                jumlah = document.getElementById("jumlah").value,
                walink2 = 'Hai kak saya ingin membeli',
                text_yes = 'Terkirim.',
                text_no = 'Isi semua Formulir lalu klik Send.';
            		hasil = document.getElementById("totalsemua").value;
            var subtotal = 'Rp. ' + hasil.toLocaleString();
            document.getElementById("totalsemua").value = subtotal;
            var hargaori = hasil;

            /* Smartphone Support */
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                var walink = 'https://web.whatsapp.com/send';
            }

            if ("" != input_blanter.value) {

                /* Call Input Form */
                var input_name1 = $("#wa_name").val(),
                    input_email1 = $("#wa_email").val(),
                    input_type = $("#type2").val(),
                    input_produck = $("#nama_product").val(),
                    input_textarea1 = $("#wa_textarea").val();

                /* Final Whatsapp URL */
                var contact_whatsapp = 'https://api.whatsapp.com/send?phone=6281370126262&text=' + walink2 +
                    '%0A%0A' +
                    '==============' + '%0A' +
                    'Detail Pemesanan' + '%0A' +
                    '==============' + '%0A' +
                    '|| *Nama Produk* : ' + nproduct + '%0A' +
                    '|| *Type* : ' + input_type + '%0A' +
                    '|| *Varian* : ' + varian + '%0A' +
                    '|| *Harga* : Rp. ' + hargaori + '%0A' +
                    '|| *Jumlah* : ' + jumlah + '%0A' +
                    '|| *Total* : ' + subtotal + '%0A' +
                    '===============' + '%0A' +
                    'Detail Customer' + '%0A' +
                    '===============' + '%0A' +
                    '|| *Nama* : ' + input_name1 + '%0A';

                /* Whatsapp Window Open */
                window.open(contact_whatsapp, '_blank');
                var textInfoElement = document.getElementById("text-info");
                if (textInfoElement) {
                    textInfoElement.innerHTML = '<span class="yes">' + text_yes + '</span>';
                }
            } else {
                var textInfoElement = document.getElementById("text-info");
                if (textInfoElement) {
                    textInfoElement.innerHTML = '<span class="no">' + text_no + '</span>';
                }
            }
        });

        var leaseDurations = document.getElementsByName('lease-duration');
        var hargaElement = document.getElementById('harga');

        function formatCurrency(value) {
            var formatter = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            });
            return formatter.format(value);
        }

        function updateHarga() {
            for (var i = 0; i < leaseDurations.length; i++) {
                if (leaseDurations[i].checked) {
                    var formattedHarga = formatCurrency(leaseDurations[i].dataset.harga);
                    if (hargaElement) {
                        hargaElement.textContent = formattedHarga;
                    }
                    break;
                }
            }
        }

        for (var i = 0; i < leaseDurations.length; i++) {
            leaseDurations[i].addEventListener('change', updateHarga);
        }

        // Menampilkan harga dari varian yang dipilih secara default (jika ada)
        updateHarga();

        var leaseDurations = document.getElementsByName('lease-duration');
        var buyButton = document.querySelector('.add_to_cart_button');
        var varElement = document.getElementById('var');
        var priceElement = document.getElementById('harga');
        var modalHarga = document.getElementById('price');
        var totalElement = document.getElementById('totalsemua');
        var variantElement = document.getElementById('variannya');

        function updateVarAndPrice() {
            for (var i = 0; i < leaseDurations.length; i++) {
                if (leaseDurations[i].checked) {
                    var formattedHarga = formatCurrency(leaseDurations[i].dataset.harga);
                    variasiValue = leaseDurations[i].nextElementSibling.querySelector('#variasi').textContent;
                    if (varElement) {
                        varElement.textContent = 'varian : ' + variasiValue;
                    }
                    variantElement.value = variasiValue;
                    if (priceElement) {
                        priceElement.textContent = formattedHarga;
                    }
                    if (modalHarga) {
                        modalHarga.textContent = formattedHarga;
                    }
                    if (totalElement) {
                        totalElement.value = leaseDurations[i].dataset.harga;
                    }
                    variantElement.value = variasiValue;
                    if (buyButton) {
                        buyButton.disabled = false;
                    }
                    break;
                }
            }
        }

        for (var i = 0; i < leaseDurations.length; i++) {
            leaseDurations[i].addEventListener('change', updateVarAndPrice);
        }

        updateVarAndPrice();

        document.addEventListener("DOMContentLoaded", function () {
            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            if (modal && btn && span) {
                // When the user clicks on the button, open the modal
                btn.addEventListener("click", function () {
                    modal.style.display = "block";
                });

                // When the user clicks on <span> (x), close the modal
                span.addEventListener("click", function () {
                    modal.style.display = "none";
                });

                // When the user clicks anywhere outside of the modal, close it
                window.addEventListener("click", function (event) {
                    if (event.target === modal) {
                        modal.style.display = "none";
                    }
                });
            }
        });
    });