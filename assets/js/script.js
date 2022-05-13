let siteScrolled = 0;
navBar = document.getElementById('nav-bar');
window.addEventListener("scroll", () => {
  let scrolledUp = window.pageYOffset || document.documentElement.scrolledUp;
  if (scrolledUp > siteScrolled) {
    navBar.style.top = "-80px";
  } else {
    navBar.style.top = "0";
  }
  siteScrolled = scrolledUp;
});

document.getElementById("copy-right").innerHTML = new Date().getFullYear();

(function () {
  emailjs.init("ikQ7u-QHKbEX7pcU2");
})();

let form = document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let form = document.getElementById("contact-form");
  sendEmail(form)
});

function sendEmail(data) {
  emailjs.send("service_2mp744f", "shybold001", {
      from_name: data.user_name.value,
      to_name: data.user_email.value,
      message: data.message.value,
      from_email: data.user_email.value
    })
    .then(function () {
      document.getElementById("modal-body").innerHTML = `<div id="modal-body" class="modal-body modal-items"> <h5>Mail Successfully Sent</h5></div>`
    }, function (error) {
      document.getElementById("modal-body").innerHTML = `<div id="modal-body" class="modal-body modal-items"> <h5>Mail Sending Failed</h5>
            <p>Error Code: ${error.status}</p></div>
            <button type="button" onclick="resendRequest()" class="btn btn-light">Resend</button>`
    });
}

function resendRequest() {
  document.getElementById("modal-body").innerHTML = `<div id="modal-body" class="modal-body modal-items">
            <form id="contact-form">
              <div class="row mb-3">
                <input type="hidden" name="contact_number">
                <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputName" name="user_name" placeholder="John Smith" required>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" name="user_email" placeholder="johnsmith@example.com"
                    required>
                </div>
              </div>
              <div class="row mb-3">
                <label for="texthere" class="col-sm-2 col-form-label">Message</label>
                <div class="col-sm-10">
                  <textarea id=texthere class="form-control" name="message" placeholder="Project Description..."
                    required rows="5" cols="30"></textarea>
                </div>
              </div>
              <div class="d-grid">
                <button id="btn-submit" class="btn btn-light" type="submit">Send Project Request!</button>
              </div>
            </form>
          </div>`;

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let form = document.getElementById("contact-form")
    sendEmail(form);
  });

}