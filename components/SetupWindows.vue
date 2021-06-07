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
      <p>コマンドラインで <code>yarn global add @vue/cli</code> を実行。</p>
      <h3>Githubのリモートリポジトリの内容をローカルにコピーする場合</h3>
      <p>
        ローカルリポジトリを作成したいディレクトリに移動し、<code
          >git clone ~.git</code
        >
        を実行。ローカルリポジトリが作成されたら、
        <code>yarn install</code> を実行しておく。
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
        新しいプロジェクトを作成したいディレクトリに移動し、
        <code>vue create (プロジェクト名) </code
        >を実行。その後以下のように選択。
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
      <p>
        Vueプロジェクトを立ち上げてから
        <code>yarn add electron</code> でインストール。
      </p>
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
      <p>
        Vueプロジェクトを立ち上げてから
        <code>vue add vuetify</code> でインストール。
      </p>
      <h2>Prettier + ESLint（フォーマッター）について</h2>
      <p>いずれもVSCodeの拡張機能からインストールできる。</p>
      <v-list>
        <v-subheader>有効化の手順</v-subheader>
        <v-list-item>1.VSCodeの拡張機能からESLintをインストール。</v-list-item>
        <v-list-item
          >2.ローカルにESLintがインストールされていない（node_modulesにESLintが入っていない）場合は2.1~2.4を実行。</v-list-item
        ><v-list-item
          >2-1.カレントディレクトリで<code>yarn</code>を実行してpackage.jsonを生成。</v-list-item
        >
        <v-list-item
          >2-2.<code>yarn add --dev eslint</code
          >を実行してローカルにESLintをインストール。</v-list-item
        >
        <v-list-item
          >2-3.package.jsonのscriptsの部分に<code>"lint": "eslint src"</code
          >と加筆。</v-list-item
        >
        <v-list-item
          >2-4.カレントディレクトリで<code
            >"node_modules\.bin\eslint" --init</code
          >を実行。</v-list-item
        >
        <v-list-item
          >3.VSCodeの拡張機能からPrettierをインストール。</v-list-item
        >
        <v-list-item
          >4.「ctrl +
          ,」を押して設定画面を開き、設定の検索欄に「defaultformatter」と入力。Default
          Formatterの欄で「Prettier - Code formatter」を選択。</v-list-item
        >
        <v-list-item
          >5.設定の検索欄に「save」と入力。Format On
          Saveの欄にチェックを入れる。</v-list-item
        >
        <v-list-item>6.一旦VSCodeを終了して開き直す。</v-list-item>
      </v-list>
      <p>詳細は以下のリンクを参照。</p>
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
            VSCodeを日本語で使用できる。
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
      <h2>（おまけ）個人的につまづいた部分について</h2>
      <p>過去に遭遇した（主に）Windows特有の問題について述べておく。</p>
      <h3>ZeroMQでコンパイルエラー</h3>
      <v-list three-line>
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>エラー１</v-list-item-title
            >（エラーコードを記録するのを忘れた）<br />
            zeromq をコンパイルできていなかったのが原因でした。<br />
            対策：Visual Studio 2015 C++ をインストール</v-list-item-content
          >
        </v-list-item>
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>エラー２</v-list-item-title
            ><code
              >Module parse failed: Unexpected character '�' (1:2)<br />
              You may need an appropriate loader to handle this file type,
              currently no loaders are configured to process this file. See
              https://webpack.js.org/concepts#loaders <br />(Source code omitted
              for this binary file)</code
            >
            原因：バイナリーファイルを読み込めていない。zeromq.nodeはプレビルドされているから。<br />
            対策：https://github.com/webpack-contrib/node-loader
            webpackのloaderにnode-loaderを追加する。<code
              >yarn add node-loader</code
            >をして、 webpack.config.js ファイルを作る。</v-list-item-content
          >
        </v-list-item>
        <v-list-item
          ><v-list-item-content>
            <v-list-item-title>エラー３</v-list-item-title
            ><code
              >Uncaught Error: The module '~\zeromq\build\Release\zmq.node' was
              compiled against a different Node.js version using
              NODE_MODULE_VERSION 83. <br />This version of Node.js requires
              NODE_MODULE_VERSION 80. <br />Please try re-compiling or
              re-installing the module (for instance, using npm rebuild or npm
              install).</code
            >参考リンク
            <a href="https://qiita.com/YKEI_mrn/items/c10ce127123bc47b9c5d"
              >https://qiita.com/YKEI_mrn/items/c10ce127123bc47b9c5d</a
            >
            <a href="https://note.com/npaka/n/nd634e4c4beb7"
              >https://note.com/npaka/n/nd634e4c4beb7</a
            ></v-list-item-content
          >
        </v-list-item>
      </v-list>
      <h3>パスの編集について</h3>
      <p>
        スタートボタン→「設定」→「システム」→「詳細情報」→「システムの詳細設定」（ウィンドウが開く）→「環境変数」<br />→ユーザー環境変数もしくはシステム環境変数の"Path"を選択し、編集する。
      </p>
      <p>
        <a href="https://www.atmarkit.co.jp/ait/articles/1805/11/news035.html"
          >Windows 10でPath環境変数を設定／編集する</a
        >
      </p>
      <p>
        編集の際は既存のパスを誤って削除してしまわないよう注意。コマンドが使えなくなって困る。
      </p>
      <h3>改行コードについて</h3>
      <p>OSによって用いられる改行コードが異なる。</p>
      <p>
        <a href="https://cprogram.net/line-feed-code/"
          >改行コードの種類の「CR」「LF」「CRLF」の意味と違い</a
        >
      </p>
      <p>
        git add するときに<code>warning: LF will be replaced by CRLF ~</code>
        などと表示されることがある。
      </p>
      <p>
        <a href="https://normalblog.net/system/lf_replaced_crlf/"
          >git add .したらwarning: LF will be replaced by CRLF
          inが出まくったのは改行コードを自動変換していたから</a
        >
      </p>
      <h3>ファイル名変更後のエラー</h3>
      <p>
        ファイル名を変更した後、しばらくVSCode上で<br /><code
          >Already included file name (component) differs from file name
          (component) only in casing.<br />
          The file is in the program because:<br />
          Imported via '~' from file '~'<br />
          Root file specified for compilation</code
        ><br />というようなエラー表示がなされることがある。キャッシュの問題のようで、しばらく放置していると解消した。
      </p>
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
