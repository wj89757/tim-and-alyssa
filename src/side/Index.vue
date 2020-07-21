<template>
  <KView class="page form js_show">
    <KView class="page__hd">
      <h1 class="page__title">一起要做的事情呀</h1>
      <p class="page__desc">要一起打卡的</p>
      <div class="todo-box" style="margin-top:30px;">
        <KCheckboxGroup v-model="checkboxGrpValues" @change="handleChange">
          <KCheckbox value="泡温泉">泡温泉</KCheckbox>
          <KCheckbox value="去云南西双版纳">去云南西双版纳</KCheckbox>
          <KCheckbox value="拍海马体">拍海马体</KCheckbox>
          <KCheckbox value="蹦床">蹦床</KCheckbox>
          <KCheckbox value="阿尔卑斯山">阿尔卑斯山⛰</KCheckbox>
          <KCheckbox value="斯里兰卡">斯里兰卡🇱🇰</KCheckbox>
        </KCheckboxGroup>
      </div>
    </KView>
  </KView>
</template>

<script>
export default {
  data() {
    return {
      singleCheckbox: false,
      checkboxGrpValues: [],
      inputCardValue: "",
      inputNickName: "",
      switchItem: false,
      radioValue: 1
    };
  },
  methods: {
    handleChange() {
      console.log(this.checkboxGrpValues);
    },
    singleCheckboxHandler() {
      console.log(this.singleCheckbox);
    },
    raidoChange() {
      console.log(this.radioValue);
    },
    inputChange() {
      console.log(this.inputValue);
    }
  }
};
</script>
<style scoped>
  .todo-box .weui-cell {
    padding-left:0px !important;
  }
</style>