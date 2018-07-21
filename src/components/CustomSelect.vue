<template>
	<div class="select-wrapper">
		<select class="selectBox">
		<option>Option 1</option>
		<option>Option 2</option>
		<option>Option 3</option>
		<option>Option 4</option>
	</select>
</div>

</template>

<script>
export default {
  name: "CustomSelect"
};
</script>

<style>
.select-wrapper {
  border-radius: 36px;
  display: inline-block;
  overflow: hidden;
  background: #c7cacd;
  border: 1px solid #c7cacd;
}
.selectBox {
  font-size: 14px;
  width: 100px;
  height: 25px;
  border: 0px;
  outline: none;
}
</style>
