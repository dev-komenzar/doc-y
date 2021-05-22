<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
      </div>
      <v-card class="ma-2">
        <v-card-title class="headline"> RUTILEA GUI GROUP </v-card-title>
        <v-card-text>
          <p>
            Nuxt.js + Vuetify + GitHub Pagesで作るGUI班のドキュメントです。
            自由に編集しましょう。 Nuxt.jsとは、Vue.jsのためのServer Side
            Generateフレームワークです。
          </p>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> 編集のやり方へ </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="ma-2" :ripple="{ center: false }">
        <v-card-title class="headline">セットアップマニュアル</v-card-title>
        <v-card-text>
          <p>
            Mac, Windows, Ubuntu でのVue.js + TypeScript + Electron
            のセットアップ方法をまとめています。
          </p>
          <p>現在Windows版のみ整備中。Mac, Ubuntu版を書く人募集。</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/setup">セットアップへ</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="ma-2" :ripple="{ center: false }">
        <v-card-title class="headline"
          >Vue + Electron デバッグまとめ</v-card-title
        >
        <v-card-text>
          <p>
            デバッグを知っていると開発効率が上がります。ぜひ活用してください！
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/debug">デバッグへ</v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="ma-2" :ripple="{ center: false }">
        <v-card-title class="headline"> プロジェクト管理について </v-card-title>
        <v-card-text>
          米谷がはじめてPM（プロジェクトマネージャー）をやって気がついたことをシェアします。
          やってよかったこと、改善できることをまとめていきます。
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" nuxt to="/pm">プロジェクト管理へ</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>
