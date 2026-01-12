const API = "http://localhost:5000/api/tenants";

let tenants = [];
let editId = null;

async function loadTenants() {
  const res = await fetch(API);
  tenants = await res.json();
  render();
}

function render() {
  const table = document.getElementById("tenantTable");
  table.innerHTML = "";

  tenants.forEach(t => {
    table.innerHTML += `
      <tr>
        <td>${t.name}</td>
        <td>${t.room}</td>
        <td>₹${t.rent}</td>
        <td>${t.status}</td>
        <td>${t.contact}</td>
        <td>${t.joinDate}</td>
        <td>
          <button onclick="edit('${t._id}')">Edit</button>
          <button onclick="remove('${t._id}')">Delete</button>
        </td>
      </tr>
    `;
  });
}

document.getElementById("saveBtn").onclick = async () => {
  const tenant = {
    name: name.value,
    room: room.value,
    rent: rent.value,
    status: status.value,
    contact: contact.value,
    joinDate: joinDate.value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tenant)
  });

  clear();
  loadTenants();
};

function edit(id) {
  const t = tenants.find(x => x._id === id);
  editId = id;

  name.value = t.name;
  room.value = t.room;
  rent.value = t.rent;
  status.value = t.status;
  contact.value = t.contact;
  joinDate.value = t.joinDate;

  saveBtn.style.display = "none";
  updateBtn.style.display = "block";
}

updateBtn.onclick = async () => {
  await fetch(`${API}/${editId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      room: room.value,
      rent: rent.value,
      status: status.value,
      contact: contact.value,
      joinDate: joinDate.value
    })
  });

  clear();
  loadTenants();

  updateBtn.style.display = "none";
  saveBtn.style.display = "block";
};

async function remove(id) {
  await fetch(`${API}/${id}`, { method:"DELETE" });
  loadTenants();
}

function clear() {
  name.value = room.value = rent.value = contact.value = joinDate.value = "";
  status.value = "Paid";
}

loadTenants();