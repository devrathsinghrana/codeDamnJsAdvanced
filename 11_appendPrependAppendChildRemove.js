const btn = document.getElementById("my-third-button");

btn.addEventListener("click", () => {
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  h1.innerHTML = `<p>Hello <span style="color:red;">miss</span></p>`;
  h2.innerText = `Why miss`;

  document.body.appendChild(h1);
  document.body.append(h1, "? meri jaan");
  document.body.prepend(h2, "? meri jaan");
  setTimeout(() => {
    h1.remove(); //it will not remove ? meri jaan
    h2.remove();
    h1.remove();
    h2.remove();
    h1.remove();
    h2.remove(); //this will not give error
  }, 1000);
  document.body.appendChild("hello"); //gives error
});
