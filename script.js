// Variables para manejar los datos
let books = [];
let editIndex = null;

// Selección de elementos del DOM
const bookForm = document.getElementById("bookForm");
const bookTable = document.getElementById("bookTable");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");

// Manejar el formulario
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;

  if (editIndex === null) {
    // Agregar nuevo libro
    books.push({ id: books.length + 1, title, author });
  } else {
    // Editar libro existente
    books[editIndex] = { id: books[editIndex].id, title, author };
    editIndex = null;
  }

  renderTable();
  bookForm.reset();
});

// Renderizar la tabla de libros
function renderTable() {
  bookTable.innerHTML = "";

  books.forEach((book, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="editBook(${index})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="deleteBook(${index})">Eliminar</button>
      </td>
    `;

    bookTable.appendChild(row);
  });
}

// Editar un libro
function editBook(index) {
  const book = books[index];
  titleInput.value = book.title;
  authorInput.value = book.author;
  editIndex = index;
}

// Eliminar un libro
function deleteBook(index) {
  books.splice(index, 1);
  renderTable();
}
