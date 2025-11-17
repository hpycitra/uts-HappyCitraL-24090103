// ==================== DATA GLOBAL ====================

// Data Ringkasan (digunakan di Dashboard)
const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

// Data Produk (digunakan di Products)
let products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

// Variabel Global untuk Modal
let editId = null;
let deleteId = null;


// ==================== FUNGSI UTILITY ====================

function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number);
}

// ==================== FUNGSI PRODUK (Digunakan di products.html) ====================

function renderTable() {
    const tableBody = document.getElementById("productTableBody");
    if (!tableBody) return; // Hentikan jika elemen tidak ada di halaman ini

    tableBody.innerHTML = "";

    products.forEach((product, index) => {
        const row = tableBody.insertRow();

        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = product.name;
        row.insertCell().textContent = formatRupiah(product.price);
        row.insertCell().textContent = product.stock;

        const actionCell = row.insertCell();

        // Edit Icon
        const editIcon = document.createElement("img");
        editIcon.src = "assets/image/edit.png";
        editIcon.alt = "Edit";
        editIcon.classList.add("action-icon");
        editIcon.onclick = () => editProduct(product.id);
        actionCell.appendChild(editIcon);

        // Delete Icon
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "assets/image/trash.png";
        deleteIcon.alt = "Hapus";
        deleteIcon.classList.add("action-icon");
        deleteIcon.onclick = () => deleteProduct(product.id);
        actionCell.appendChild(deleteIcon);
    });
}

/* =============== EDIT MODAL HANDLERS =============== */
window.editProduct = function(id) { // Dibuat global agar dapat diakses dari HTML
    const p = products.find(x => x.id === id);
    editId = id;

    document.getElementById("editName").value = p.name;
    document.getElementById("editPrice").value = p.price;
    document.getElementById("editStock").value = p.stock;

    document.getElementById("editModal").style.display = "flex";
}

window.closeEdit = function() {
    document.getElementById("editModal").style.display = "none";
}

window.saveEdit = function() {
    const p = products.find(x => x.id === editId);
    const newName = document.getElementById("editName").value.trim();
    const newPrice = parseInt(document.getElementById("editPrice").value);
    const newStock = parseInt(document.getElementById("editStock").value);

    if (!newName || isNaN(newPrice) || isNaN(newStock) || newPrice <= 0 || newStock < 0) {
        alert("Harap isi semua kolom dengan nilai yang valid.");
        return;
    }

    p.name = newName;
    p.price = newPrice;
    p.stock = newStock;

    closeEdit();
    renderTable();
}

/* =============== DELETE MODAL HANDLERS =============== */
window.deleteProduct = function(id) {
    deleteId = id;
    const p = products.find(x => x.id === id);

    document.getElementById("deleteText").textContent =
        `Apakah kamu yakin ingin menghapus "${p.name}"? Aksi ini tidak dapat dibatalkan.`;

    document.getElementById("deleteModal").style.display = "flex";
}

window.closeDelete = function() {
    document.getElementById("deleteModal").style.display = "none";
}

window.confirmDelete = function() {
    products = products.filter(p => p.id !== deleteId);
    closeDelete();
    renderTable();
}


// ==================== FUNGSI DASHBOARD (Digunakan di dashboard.html) ====================

function renderDashboardCards() {
    const summaryCardsContainer = document.getElementById('summaryCards');
    if (!summaryCardsContainer) return; // Hentikan jika elemen tidak ada di halaman ini

    const cardData = [
        {
            title: 'Total Products',
            value: summary.totalProducts,
            iconSrc: 'assets/image/totalproducts.png',
            formatter: (val) => val.toLocaleString('id-ID'),
            link: "total-products.html"
        },
        {
            title: 'Total Sales',
            value: summary.totalSales,
            iconSrc: 'assets/image/totalsales.png',
            formatter: (val) => val.toLocaleString('id-ID'),
            link: "total-sales.html"
        },
        {
            title: 'Total Revenue',
            value: summary.totalRevenue,
            iconSrc: 'assets/image/totalrevenue.png',
            formatter: formatRupiah,
            link: "total-revenue.html"
        }
    ];

    summaryCardsContainer.innerHTML = ''; // Pastikan bersih
    
    cardData.forEach(data => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${data.iconSrc}" class="card-icon">
            <div class="card-title">${data.title}</div>
            <div class="card-value">${data.formatter(data.value)}</div>
        `;

        card.addEventListener("click", () => {
            window.location.href = data.link;
        });

        summaryCardsContainer.appendChild(card);
    });
}


// ==================== LOGIKA UTAMA (Berjalan setelah DOM dimuat) ====================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Logika Login (Hanya berjalan di halaman Login jika ada)
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e){
            e.preventDefault();
            let email = document.getElementById("email").value;
            let pass = document.getElementById("password").value;

            if(email === "" || pass === ""){
                alert("Email dan Password tidak boleh kosong!");
                return;
            }
            alert("Login berhasil!");
            window.location.href = "dashboard.html";
        });
    }
    
    // 2. Logika Dashboard (Hanya berjalan di dashboard.html)
    renderDashboardCards();
    
    // 3. Logika Products (Hanya berjalan di products.html)
    renderTable();
});

