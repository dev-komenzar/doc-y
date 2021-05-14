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
          <v-list disabled dense>
            <v-list-item-group>
              <v-list-item>GitHub Projects タスク共有ツール</v-list-item>
              <v-list-item>フォーマッターを使う</v-list-item>
              <v-list-item>
                バックエンドの人にモックサーバーを作ってもらった
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <p>また今回の反省でもっと良くできること</p>
          <v-list disabled dense>
            <v-list-item-group>
              <v-list-item
                >フォーマッターをファイル保存時に実行する設定</v-list-item
              >
              <v-list-item
                >フロントエンドとバックエンドのリポジトリは分離する</v-list-item
              >
            </v-list-item-group>
          </v-list>
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
          <p>
            タスクの管理もGitHub Project Boardを使いました。 流れとしては、
            <v-list disabled dense>
              <v-list-item
                >米谷がプロジェクト全体の
                マネージャー（今回は廣川さん→窪田さん）からフロントのタスクを割り当てられ</v-list-item
              >
              <v-list-item
                >タスクへと整理・分割して Boardに書き込む</v-list-item
              >
              <v-list-item
                >作業する人はBoardにあるタスクを上から取り掛かる</v-list-item
              >
            </v-list>
            こんな感じです。
          </p>
        </v-card-text>
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
