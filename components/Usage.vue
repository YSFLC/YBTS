<template>
  <div>
    <div class="hero-body box">
      <p class="title">
        Usage
      </p>
      <p class="subtitle">
        はじめての方に <strong><a href="https://github.com/YSFLC/YBTS/wiki">Wiki</a></strong>
      </p>
    </div>
    <section class="section box">
      <h2 class="subtitle is-large">
        <h1><strong>#</strong> 商品の読み込み<br></h1>
        <ul>
          <li>1.  Convertを開きボックスにカーソルを合わせてクリックする</li>
          <li>2.  バーコードリーダで商品のバーコードを読み取る</li>
          <li>3.  保存をクリックする</li>
        </ul>
      </h2>
      <b-collapse :open="false" aria-id="aria0">
        <template #trigger="props">
            <b-button
                label="説明画像を表示"
                aria-controls="aria0"
                :aria-expanded="props.open" />
        </template>
        <div class="notification">
          <div class="content">
            <img src="@/assets/Usage/scs0.png">
          </div>
        </div>
      </b-collapse>
    </section>
    <section class="section box">
      <h2 class="subtitle is-large">
        <h1><strong>#</strong> 商品の登録<br></h1>
        <ul>
          <li>1.  Loadを開き、JSONファイルをドラッグアンドドロップして、読み込みをクリックする</li>
        </ul>
      </h2>
      <b-collapse :open="false" aria-id="aria1">
        <template #trigger="props">
            <b-button
                label="説明画像を表示"
                aria-controls="aria1"
                :aria-expanded="props.open" />
        </template>
        <div class="notification">
          <div class="content">
            <img src="@/assets/Usage/scs1.png">
          </div>
        </div>
      </b-collapse>
    </section>
    <section class="section box">
      <h2 class="subtitle is-large">
        <h1><strong>#</strong> 商品の販売<br></h1>
        <ul>
          <li>1.  Sellを開き、ボックスにカーソルを合わせてクリックする</li>
          <li>2.  バーコードリーダで本のバーコードを読み取る</li>
          <li>3.  追加をクリックする</li>
          <li>4.  すべて売却をクリックする</li>
        </ul>
      </h2>
      <b-collapse :open="false" aria-id="aria2">
        <template #trigger="props">
            <b-button
                label="説明画像を表示"
                aria-controls="aria2"
                :aria-expanded="props.open" />
        </template>
        <div class="notification">
          <div class="content">
            <img src="@/assets/Usage/scs2.png">
          </div>
        </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>
</script>

<style>
h1 {
  font-size: 26px;
}
</style>
