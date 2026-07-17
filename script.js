const menuData = {
  sicak: [],
  soguk: [],
  tatli: [],
  yiyecek: [],
  izgaravepide: [],
  dondurma: []
};

async function loadMenuProducts() {
  try {
    const { data, error } = await supabaseClient
      .from("products")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) throw error;

    if (!data || data.length === 0) {
      renderProducts("sicak");
      renderProducts("soguk");
      renderProducts("tatli");
      renderProducts("yiyecek");
      renderProducts("izgaravepide");
      renderProducts("dondurma");
      
      return;
    }

    data.forEach(function (product) {
      if (menuData[product.category]) {
        menuData[product.category].push(product);
      }
    });

    renderProducts("sicak");
    renderProducts("soguk");
    renderProducts("tatli");
    renderProducts("yiyecek");
    renderProducts("izgaravepide");
    renderProducts("dondurma");

  } catch (error) {
    alert("Menü yüklenirken hata oluştu: " + error.message);
  }
}

function createCard(product) {
  return `
    <div class="card">
      <img 
        src="${product.image}" 
        alt="${product.name}"
        onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800';"
      >

     div class="card-body">

<h3>${product.name}</h3>

<p class="description">
${product.description ?? ""}
</p>

<p class="price">
${product.price} ₺
</p>

</div>

function renderProducts(category) {
  const container = document.querySelector(`#${category} .products`);

  if (!container) return;

  container.innerHTML = "";

  if (menuData[category].length === 0) {
    container.innerHTML = `
      <p style="color:#D8CCB5;">Bu kategoride ürün bulunmuyor.</p>
    `;
    return;
  }

  menuData[category].forEach(function (product) {
container.insertAdjacentHTML(
"beforeend",
createCard(product)
);

loadMenuProducts();
