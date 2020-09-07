<template>
  <div>
    <h2>test</h2>
    <v-region type="city" v-model="selected" @values="values"></v-region>
  </div>
</template>

<script>
  import vRegion from '../../../static/v-region/src/components/CityPicker.js'
  export default {
    components: {
      vRegion
    },
    data () {
      return {
        selected: ['110000', '120000']
      }
    },
    methods: {
      // item selected callback
			// data format: [{ key: 'xxx', value: 'xxx' }, ...]
			values(datas){
				console.log(datas, '======选择结果展示=====')
			}
    },
    mounted () {

    }
  }
</script>

<style>
  /* @import url("../../../static/v-region/src/styles/city.css"); */
  .v-dropdown-caller {
    width: 500px;
  }
</style>
