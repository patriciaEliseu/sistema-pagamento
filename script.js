  async function getProduct(produtoId) {
    const recebeApiProduto = await fetch(`https://api.mercadolibre.com/items/${produtoId}`);
    const produto = await recebeApiProduto.json();
    return produto;
  }



  function createCartItemElement({ sku, name, salePrice }) { /* criando li e que vai nela */
    const li = document.createElement('li');
    li.className = 'venda__items';
    li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    li.addEventListener('click', cartItemClickListener);
  
    return li;
  }

  async function buscarItem(elemento) {
   
    const retSku = getSkuFromProductItem(elemento.target.parentNode); 
    const buscaItem = await fetchItem(retSku);
    const retornoItem = {
      sku: buscaItem.id,
      name: buscaItem.title,
      salePrice: buscaItem.price,
    };
    space.appendChild(createCartItemElement(retornoItem)); /* está inserindo o retornoItem como filho do space */
    // requisito 4
    salvaCarrinho();
  
    return buscaItem;
  }