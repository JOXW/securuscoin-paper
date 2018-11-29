var notification = document.getElementById("notification_container");
var identicon_widget = document.getElementById("address_identicon_widget");
var qr_widget = document.getElementById("address_qr_widget");

function checkAddress() {
  notification.innerHTML = '';
  identicon_widget.innerHTML = '';
  qr_widget.innerHTML = '';
  
  var address = document.getElementById("address").value;
  if((address.length != 99 && address.length != 187) || address.substring(0,4) != "TRTL") {
      notification.innerHTML = '<div class="column is-12 notification is-danger has-text-centered">Invalid TRTL address!</div>';
    return;
  }

  var icon = document.createElement("canvas");
  icon.width = 256;
  icon.height = 256;
  icon.setAttribute("data-jdenticon-value", address);
  jdenticon.update(icon);

  identicon_widget.appendChild(icon);

  var typeNumber = 0;
  var errorCorrectionLevel = 'L';

  var qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(address);
  qr.make();
  qr_widget.innerHTML = qr.createImgTag(6);
  
  
}
