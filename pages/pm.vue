<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-title class="headline">プロジェクト管理</v-card-title>
        <v-card-text>
          <p>
            こんにちは。米谷がはじめてPM（プロジェクトマネージャー）をやって気がついたことをシェアします。
            やってよかったこと、改善できることをまとめていきます。
          </p>
          <p>まずやってよかったこと</p>
          <ul>
            <li>GitHub Projects タスク共有ツール</li>
            <li>フォーマッターを使う</li>
            <li>バックエンドの人にモックサーバーを作ってもらった</li>
          </ul>
          <p>また今回の反省でもっと良くできること</p>
          <ul>
            <li>フォーマッターをファイル保存時に実行する設定</li>
            <li>フロントエンドとバックエンドのリポジトリは分離する</li>
          </ul>
          <h2>プロジェクトの進め方</h2>
          <p>はじめにどんなふうにプロジェクトを進めたのかレポートします。</p>
          <p>
            今回のプロジェクト（SD
            Scope）は米谷がはじめてPMとして開発をしました。
            島本さんと２人体制で取り組みました。
            ２人で開発するには情報共有やタスクの振り分けが大事になってきます。
            ４月からプロジェクトが始まりましたが、５月で一区切りつきました。
            その間にGUIがスケジュールを遅らせることはありませんでした。
            慌ただしい週もあったのは反省ですが、素晴らしいことだと思います！
          </p>
          <h3>情報共有</h3>
          <p>
            プロジェクトを進める中で基本的な情報があります。
            たとえば、最新のブランチはどれか、 モニターの解像度はいくらか、
            バックエンドの起動方法、 APIの仕様書のリンクなど。
            主にプロジェクト固有の情報になります。
            これらの情報を貯めておく場所として
            <a
              href="https://docs.github.com/ja/github/managing-your-work-on-github/about-project-boards"
              >GitHub Project Board</a
            >
            を使いました。
          </p>
          <v-row>
            <v-col>
              <v-img :src="projectBoard" max-height="400px" contain />
            </v-col>
            <v-col>
              <v-img :src="shareInfo" max-height="500px" contain />
            </v-col>
          </v-row>
          <p>
            これはいわゆるカンバン形式のタスク管理ツールです。
            実際に使ってみると１発で使い方がわかると思うので説明は特にしません。
          </p>
          <p>GH Projectのカラムのひとつを「共有情報」に割り当てました。</p>
          <h3>タスク共有</h3>
          <p>タスクの管理もGitHub Project Boardを使いました。 流れとしては、</p>
          <ul>
            <li>
              米谷がプロジェクト全体の
              マネージャー（今回は廣川さん→窪田さん）からフロントのタスクを割り当てられ
            </li>
            <li>タスクへと整理・分割して Boardに書き込む</li>
            <li>作業する人はBoardにあるタスクを上から取り掛かる</li>
          </ul>
          <p>こんな感じです。</p>
          <h3>質問しやすい環境作り</h3>
          <p>
            今回は２人での開発だったので関係なかったんですが、
            slackのチャンネルなどで質問を受ける場を作るといいと思います。
            Yグループの全体ではなかなか書き込みにくいため、
            専用のチャンネルを作るなど質問に特化した場所を設置したほうがいいと思います。
          </p>
          <p>
            自分で調べることは大事ですが、たとえば「今回のプロジェクトのファイル構成」などはいくらググっても出てきません。
            プロジェクトについて知っている人から教えてもらう必要があります。
          </p>
          <p>
            また、ZeroMQのバージョンの違いによるエラーのように
            GUI班でよくあるトラブルというのも誰かに教えてもらった方が早かったりします。
          </p>
          <h2>フォーマッターを使う</h2>
          <p>
            JavaScript,
            TypeScriptでコードを書いていると人によってばらつきがあります。
            インデントがスペース２個なのか４個なのか。アロー関数を書くとき
            (element) => func なのか element => {func}なのか。
            ばらつきがあると他の人が書いたコードが読みにくくなってしまいます。
          </p>
          <p>
            そこで登場するのがフォーマッターです。フォーマッターとは、
            ルールに従ってコードを整形（format）してくれるプログラムのことです。
            言語によって有名なフォーマッターがあります。JS, TSの場合"ESLint +
            Prettier" という組み合わせがよく使われます。
          </p>
          <h3>参考</h3>
          <ul>
            <li>
              <a href="https://qiita.com/soarflat/items/06377f3b96964964a65d"
                >* Prettier 入門 ～ESLintとの違いを理解して併用する～ - Qiita</a
              >
            </li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/"> Home </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      projectBoard: require('~/assets/img/gh-project.png'),
      shareInfo: require('~/assets/img/share-info.png'),
    }
  },
})
</script>
<style scoped>
h2 {
  margin: 2rem auto 1rem;
}
</style>
