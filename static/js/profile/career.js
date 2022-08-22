const reset = document.querySelector("#careerBackdrop .modal-body .container");
let idx = 1;
function addCareer() {
  idx += 1;
  $("#careerBackdrop .modal-body .container").append(`<div class="row">
            <div class="col-3"><strong>${idx}. 작품 분야 </strong></div>
            <div class="col mb-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select genre</option>
                <option value="1">드라마</option>
                <option value="2">영화</option>
                <option value="3">광고</option>
                <option value="4">잡지</option>
                <option value="5">무대</option>
                <option value="6">Tv</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-3"><strong>작품명</strong></div>
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3"><strong>년도</strong></div>
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="year"
                />
                <label for="floatingInput">year</label>
              </div>
            </div>
            <div class="col-1"><strong>월</strong></div>
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="month"
                />
                <label for="floatingInput">month</label>
              </div>
            </div>
          </div>`);
}

function resetCareer() {
  idx = 1;
  $("#careerBackdrop .modal-body .container")
    .replaceWith(`        <div class="container career-height">
          <div class="row">
            <div class="col-3"><strong>${idx}. 작품 분야 </strong></div>
            <div class="col mb-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select genre</option>
                <option value="1">드라마</option>
                <option value="2">영화</option>
                <option value="3">광고</option>
                <option value="4">잡지</option>
                <option value="5">무대</option>
                <option value="6">Tv</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-3"><strong>작품명</strong></div>
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3"><strong>년도</strong></div>
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="year"
                />
                <label for="floatingInput">year</label>
              </div>
            </div>
            <div class="col-1"><strong>월</strong></div>
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="month"
                />
                <label for="floatingInput">month</label>
              </div>
            </div>
          </div>
        </div>`);
}
