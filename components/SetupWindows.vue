<template>
  <v-card>
    <v-card-text>
      <h2>Vue CLIについて</h2>
      <p>
        <a href="https://jp.vuejs.org/v2/guide/installation.html"
          >Vue.js公式ドキュメント(version2)</a
        >
      </p>
      <h3>Vue CLIのインストール</h3>
      <p>コマンドラインで yarn global add @vue/cli を実行。</p>
      <h3>Githubのリモートリポジトリの内容をローカルにコピーする場合</h3>
      <p>
        ローカルリポジトリを作成したいディレクトリに移動し、git clone ~.git
        を実行。ローカルリポジトリが作成されたら、 yarn install を実行しておく。
      </p>
      <p>
        <a href="https://qiita.com/mnao305/items/b3c5f5943066a0bb8e2e"
          >VSCodeの機能で最低限必要なGit操作をしたい！</a
        >
      </p>
      <p>
        <a href="https://qiita.com/y-tsutsu/items/2ba96b16b220fb5913be"
          >VSCodeでのGitの基本操作まとめ</a
        >
      </p>
      <p>
        <a href="https://qiita.com/rubytomato@github/items/1696530bb9fd59aa28d8"
          >npmとyarnのコマンド早見表</a
        >
      </p>
      <h2>Typescriptについて</h2>
      <p>
        <a href="https://qiita.com/nrslib/items/be90cc19fa3122266fd7"
          >vue.js + typescript = vue.ts ことはじめ</a
        >
      </p>
      <p>
        <a href="https://qiita.com/ryo2132/items/4d43209ea89ad1297426"
          >Vue.js to TypeScriptの書き方一覧</a
        >
      </p>
      <h2>Vue + TypeScriptで開発を始める</h2>
      <p>
        新しいプロジェクトを作成したいディレクトリに移動し、 vue create
        (プロジェクト名) を実行。その後以下のように選択。
        <v-list two-line>
          <v-list-item
            ><v-list-item-content>
              <v-list-item-title>Please pick a preset:</v-list-item-title>
              <v-list-item-subtitle
                >Manually select features</v-list-item-subtitle
              >
            </v-list-item-content></v-list-item
          >
          <v-list-item
            ><v-list-item-content>
              <v-list-item-title
                >Check the features needed for your project:</v-list-item-title
              >
              <v-list-item-subtitle
                >Babel, TypeScript, CSS Pre-processors, Linter / Formatter, Unit
                Testing, E2E Testing</v-list-item-subtitle
              >
            </v-list-item-content></v-list-item
          >
          <v-list-item
            ><v-list-item-content>
              <v-list-item-title
                >Choose a version of Vue.js that you want to start the project
                with</v-list-item-title
              >
              <v-list-item-subtitle>2.x</v-list-item-subtitle>
            </v-list-item-content></v-list-item
          >
          <v-list-item
            ><v-list-item-content>
              <v-list-item-title
                >class-style component syntax?</v-list-item-title
              >
              <v-list-item-subtitle>Y</v-list-item-subtitle>
            </v-list-item-content></v-list-item
          >
          <v-list-item
            ><v-list-item-content>
              <v-list-item-title>Babel alongside TypeScript</v-list-item-title>
              <v-list-item-subtitle>Y</v-list-item-subtitle>
            </v-list-item-content></v-list-item
          >
          <v-list-item
            ><v-list-item-content>
              <v-list-item-title>a CSS pre-processor</v-list-item-title>
              <v-list-item-subtitle
                >Sass/SCSS (with dart-sass)</v-list-item-subtitle
              >
            </v-list-item-content></v-list-item
          >
          <v-list-item
            ><v-list-item-content>
              <v-list-item-title
                >a linter / formatter config:</v-list-item-title
              >
              <v-list-item-subtitle>ESLint + Prettier</v-list-item-subtitle>
            </v-list-item-content></v-list-item
          ></v-list
        >
      </p>
      <h2>Electronについて</h2>
      <p>
        <a href="https://www.electronjs.org/docs">Electron公式ドキュメント</a>
      </p>
      <p>
        <a href="https://jlord.us/essential-electron/index-jp.html"
          >Essential Electron</a
        >
      </p>
      <h3>Electron-quick-startで試す</h3>
      <p>
        Electronを用いたシンプルなアプリの雛形として<a
          href="https://github.com/electron/electron-quick-start"
          >Electron-quick-start</a
        >が公開されている。
      </p>
      <h3>Electronのインストール</h3>
      <p>Vueプロジェクトを立ち上げてから yarn add electron でインストール。</p>
      <h2>Vuetifyについて</h2>
      <p>
        <a href="https://vuetifyjs.com/ja/getting-started/installation/"
          >Vuetify公式ドキュメント</a
        >
      </p>
      <p>
        2021年5月時点でVuetifyはVue3には対応していない。Vuetifyを使う際はVueプロジェクト作成時にversion2を指定する必要がある。
      </p>
      <h3>Vuetifyのインストール</h3>
      <p>Vueプロジェクトを立ち上げてから yarn add vuetify でインストール。</p>
      <h2>Prettier + ESLint（フォーマッター）について</h2>
      <p>いずれもVSCodeの拡張機能からインストールできる。</p>
      <p>
        <a href="https://qiita.com/Mount/items/5f8196b891444575b7db"
          >VS CodeにESLintを設定する
        </a>
      </p>
      <p>
        <a href="https://qiita.com/k_kazukiiiiii/items/335338b3c63c28a0182c"
          >VSCodeでファイル保存時にPrettierを走らせる方法
        </a>
      </p>
      <h2>Visual Studio Codeについて</h2>
      <h3>便利な拡張機能</h3>
      <v-list two-line>
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>Auto Close Tag</v-list-item-title>
            開始タグを書くと終了タグを付け加えてくれる。
          </v-list-item-content></v-list-item
        >
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>Auto Rename Tag</v-list-item-title>
            開始タグと終了タグを同時に書き換えられる。
          </v-list-item-content></v-list-item
        >
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>Bracket Pair Colorizer</v-list-item-title>
            コード内の括弧を、ペア同士が同じ色になるように色分けしてくれる。Javascriptでは括弧が増えすぎて混乱しがちなのでとても助かる。
          </v-list-item-content></v-list-item
        >
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>ESLint</v-list-item-title>
            前述の通り。
          </v-list-item-content></v-list-item
        >
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title
              >Japanese Language Pack for Visual Studio Code</v-list-item-title
            >
            VSCodeを日本語にできる。
          </v-list-item-content></v-list-item
        >
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>Prettier</v-list-item-title>
            前述の通り。
          </v-list-item-content></v-list-item
        >
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>Tabnine</v-list-item-title>
            AIが予測変換を表示してくれる入力補完ツール。無料版だと一日に利用できる回数に制限がある。
          </v-list-item-content></v-list-item
        >
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>Vetur</v-list-item-title>
            Vueのコードの色分けやテンプレートの表示をしてくれる。
          </v-list-item-content></v-list-item
        >
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/"> Home </v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
h2 {
  margin: 2rem auto 1rem;
}
</style>
