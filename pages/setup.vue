<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-title class="headline">セットアップマニュアル</v-card-title>
        <v-card-text>
          <v-tabs fixed-tabs>
            <v-tab href="#mac">Mac</v-tab>
            <v-tab href="#windows">Windows</v-tab>
            <v-tab href="#ubuntu">Ubuntu</v-tab>
            <v-tab-item value="mac"><!--Macのマニュアルを配置--></v-tab-item>
            <v-tab-item value="windows" class="mt-2"
              ><SetupWindows
            /></v-tab-item>
            <v-tab-item value="ubuntu"
              ><!--Ubuntuのマニュアルを配置--></v-tab-item
            >
          </v-tabs>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SetupWindows from '~/components/SetupWindows.vue'

export default {
  components: {
    SetupWindows,
  },
}
</script>
