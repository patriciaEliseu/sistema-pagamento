<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <script src="processa.php"></script>
   
    
  </head>
  <body>
    <header class="header">
      <div class="container-title">
        <span class="title"><strong>Loja</strong>Vendas</span>
      </div>    
      <div class="container-cartTitle">
        <span class="cart__title">Minha Venda</span>
      </div>
    </header>
    <section class="container">
      <section class="item"></section>
      <section class="venda">
        <ol class="venda__items"></ol>
        <button class="empty-venda">Finalizar Venda</button>
      </section>
    </section>
    <?php
   
        include_once("conexao.php");

        mysqli_close($conexao);

    ?>
    <script src="script.js"></script>
  </body>
</html>