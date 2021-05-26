<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-title class="headline"
          >Vue + Electron デバッグまとめ</v-card-title
        >
        <v-card-text>
          <h3 class="mb-2">Javascriptの組み込みデバッガー</h3>
          <p>
            コード内にdebuggerステートメントを記入して動作を確認する基本的な方法。
          </p>
          <p>
            <a href="https://qiita.com/rimekg/items/c15321e257a6fd5f6ad8"
              >組み込みデバッガーの使い方</a
            >
          </p>
          <h3 class="mb-2">Electronでのデバッグ</h3>
          <p>
            <a href="https://final.hateblo.jp/entry/electron-debug"
              >Electron with Vue.js でのデバッグのやり方をまとめる</a
            >
          </p>
          <h3 class="mb-2">consoleオブジェクトのメソッド</h3>
          <p>
            <a href="https://qiita.com/baby-degu/items/1046763163bc794870ea"
              >JavaScriptでconsole.log()を使うのはやめよう</a
            >
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/"> Home </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
