//your JS code here. If required.
<script>
    const formBtn = document.getElementById("submit");
    const bookList = document.getElementById("book-list");

    formBtn.addEventListener("click", function () {
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const isbn = document.getElementById("isbn").value;

      if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
      }

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger btn-sm delete">X</button></td>
      `;

      bookList.appendChild(row);

      // Clear inputs
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("isbn").value = "";
    });

    // Delete row (event delegation)
    bookList.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
      }
    });