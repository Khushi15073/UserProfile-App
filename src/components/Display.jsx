
let container = document.getElementById("userContainer");
function display(users) {
container.innerHTML= "" ;
     
  users.forEach(user => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>name:</strong> ${user.name}</p>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> ${user.website}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
 
    container.appendChild(card);
  });
}

export default  display;