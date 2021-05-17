<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-title class="headline"
          >Windows版セットアップマニュアル</v-card-title
        >
        <v-card-text>
          <h2>Vue.jsについて</h2>
          <p>
            <a href="https://jp.vuejs.org/v2/guide/installation.html"
              >Vue.js公式ドキュメント(version2)</a
            >
          </p>
          <h3>Vueのインストール</h3>
          <v-list>
            <v-list-item>
              npmの場合：コマンドラインで npm install -g @vue/cli
              を実行（npmはnode.jsをインストールすると同時にインストールされる）
            </v-list-item>
            <v-list-item
              >yarnの場合： コマンドラインで yarn global add @vue/cli
              を実行</v-list-item
            >
          </v-list>
          <h3>Vueで開発を始める</h3>
          <p>
            新しいプロジェクトを作成したいディレクトリに移動し、 vue create
            (プロジェクト名)
            を実行。あとは表示される選択肢から好きなものを選んでいくと自動でフォルダが作られる。
          </p>
          <h2>Typescriptについて</h2>
          <h2>Electronについて</h2>
          <h3>Electron-quick-startで試す</h3>
          <p>
            Electronを用いたシンプルなアプリの雛形として<a
              href="https://github.com/electron/electron-quick-start"
              >Electron-quick-start</a
            >が公開されている。
          </p>
          <p>
            git clone https://github.com/electron/electron-quick-start
            を実行することでローカルにコピーできる。
          </p>
          <h3>Vue + Electron</h3>
          <p></p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
