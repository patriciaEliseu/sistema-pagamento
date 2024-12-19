const space = document.querySelector('.cart__items');
// console.log('judas2222', space);

function createProductImageElement(imageSource) { /* traz as imagens */
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function apagaTudo() { /* estou apagando todo o innerHtml */
  space.innerHTML = ' ';
}

function buscaBotaoEsvaziaCarrinho() {
  const vem = document.querySelector('.empty-cart');
  vem.addEventListener('click', apagaTudo);
  // console.log(vem);
}

function salvaCarrinho() {
  saveCartItems(space.innerHTML);
}

function createCustomElement(element, className, innerText) { /* cria o botão, id e titulo */
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;

  return e;
}

function createProductItemElement({ sku, name, image }) { /* cria a section e coloca createProductImageElement e createCustomElement como filho */
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  // console.log('jaaaa', section);
  return section;
}

function getSkuFromProductItem(item) { /* ele traz o sku ID */
  // console.log('aparece', item.querySelector('span.item__sku').innerText);
  return item.querySelector('span.item__sku').innerText;
}
// requisito 03
function cartItemClickListener(event) { /* evento de clicar no item e deletar */
  event.target.remove();
  salvaCarrinho();
}

function createCartItemElement({ sku, name, salePrice }) { /* criando li e que vai nela */
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);

  return li;
}

// requisito 02
async function buscarItem(elemento) {
  // console.log('judas3', elemento.target.parentNode);
  const retSku = getSkuFromProductItem(elemento.target.parentNode); /* está pegando ol que é o pai da li para poder deletar */
  // console.log('judas', retSku);
  // const space = document.querySelector('.cart__items');
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

// requisito 01
async function buscarProdutos(produto) {
  const espace = document.querySelector('.items'); /* buscou no html a section classe items. */
  const buscaProdut = await fetchProducts(produto); /* salva o valor de procurar o computador */
  buscaProdut.results.forEach((element) => { /* salvando o valor de results */
    const retornoValor = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    espace.appendChild(createProductItemElement(retornoValor));/* inserindo como filho o retornoValor do espace. */
  });
  const buscaBotao = document.querySelectorAll('.item__add');/* buscou no html o botão add ao carrinho */
  buscaBotao.forEach((element) => element.addEventListener('click', buscarItem));/* salvou o evento de click */
  // console.log('judas', buscaBotao);
  /* console.log(espace);
  console.log(buscaProdut); */
  return buscaProdut;
}

// requisito 04;
function recuperaCarrinho() {
  space.innerHTML = getSavedCartItems();
  space.addEventListener('click', cartItemClickListener);
}

window.onload = async () => {
  recuperaCarrinho();
  // requisito 1
  await buscarProdutos('computador');
  // requisito 02
  // await buscarItem('MLB1615760527');
  buscaBotaoEsvaziaCarrinho();
};