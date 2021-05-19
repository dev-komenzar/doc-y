<template>
  <div>
    <h2 class="mb-2">Vue CLIについて</h2>
    <p>
      <a href="https://jp.vuejs.org/v2/guide/installation.html"
        >Vue.js公式ドキュメント(version2)</a
      >
    </p>
    <h3>Vueのインストール</h3>
    <p>コマンドラインで yarn global add @vue/cli を実行</p>
    <h3>Vueで開発を始める</h3>
    <p>
      新しいプロジェクトを作成したいディレクトリに移動し、 vue create
      (プロジェクト名)
      を実行。あとは表示される選択肢から好きなものを選んでいくと自動でフォルダが作られる。
    </p>
    <h3>Githubのリモートリポジトリの内容をローカルにコピーする場合</h3>
    <p>
      ローカルリポジトリを作成したいディレクトリに移動し、git clone ~.git
      を実行。
    </p>
    <p>ローカルリポジトリが作成されたら、 yarn install を実行しておく。</p>
    <p>
      <a href="https://qiita.com/y-tsutsu/items/2ba96b16b220fb5913be"
        >VSCodeでのGitの基本操作まとめ</a
      >
    </p>
    <h2 class="mb-2">Typescriptについて</h2>
    <h3>vue create の選択肢</h3>
    <v-list
      ><v-list-item>
        Please pick a preset:<br />
        Manually select features</v-list-item
      >
      <v-list-item
        >Check the features needed for your project:<br />
        Babel, TypeScript, CSS Pre-processors, Linter / Formatter, Unit Testing,
        E2E Testing</v-list-item
      >

      <v-list-item
        >Choose a version of Vue.js that you want to start the project with<br />

        2.x</v-list-item
      >

      <v-list-item>
        class-style component syntax?<br />

        Y</v-list-item
      >

      <v-list-item>
        Babel alongside TypeScript<br />

        Y</v-list-item
      >

      <v-list-item>
        a CSS pre-processor<br />

        Sass/SCSS (with dart-sass)</v-list-item
      >

      <v-list-item>
        a linter / formatter config:<br />

        ESLint + Prettier</v-list-item
      ></v-list
    >
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
    <h2 class="mb-2">Electronについて</h2>
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
    <h3>Vue + Electron</h3>
    <p>Vueプロジェクトを立ち上げてから yarn add electron でインストール。</p>
    <h2 class="mb-2">Vuetifyについて</h2>
    <p>
      <a href="https://vuetifyjs.com/ja/getting-started/installation/"
        >Vuetify公式ドキュメント</a
      >
    </p>
    <p>
      2021年5月時点でVuetifyはVue3には対応していない。Vuetifyを使う際はVueプロジェクト作成時にversion2を指定する必要がある。
    </p>
    <p>Vueプロジェクトを立ち上げてから yarn add vuetify でインストール。</p>
    <h2 class="mb-2">Prettier + ESLint（フォーマッター）について</h2>
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
  </div>
</template>
