<template>
    <div class="threebtop">
        <div class="threebtop1">
            <avue-data-icons :option="option"></avue-data-icons>
        </div>
        <hr>
        <div>
            <avue-data-price :option="option2"></avue-data-price>
        </div>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        option: {
          span: 4,
          data: [
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              title: '今日注册',
              count: 12678,
              decimals: 2,
              icon: 'el-icon-tickets',
              href: '#',
              target: '_blank'
            },
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              title: '今日登录',
              count: 22139,
              icon: 'el-icon-edit',
              href: '#',
              target: '_blank'
            },
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              title: '今日订阅',
              count: 35623,
              icon: 'el-icon-delete',
              href: '#',
              target: '_blank'
            },
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              title: '今日评论',
              count: 16826,
              icon: 'el-icon-message',
              href: '#',
              target: '_blank'
            },
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              title: '今日评论',
              count: 16826,
              icon: 'el-icon-message',
              href: '#',
              target: '_blank'
            },
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              title: '今日评论',
              count: 16826,
              icon: 'el-icon-message',
              href: '#',
              target: '_blank'
            },
          ]
        },

        option2: {
            span: 6,
            data: [
            {
                title: '产品A报工',
                price: 10230,
                append: '1 / 天',
                click: function () {
                  alert('弹窗');
                },
                list: ['1天的报工产品完成时间', '支持pc客户端', '支持vue的全部体系', '一个神奇的框架']
            }, {
                title: '产品B报工',
                price: 3120,
                append: '7 / 天',
                click: function () {
                  alert('弹窗');
                },
                list: ['7天的报工产品完成时间', '支持pc客户端', '支持vue的全部体系', '一个神奇的框架']
            }, {
                title: '产品C报工',
                price: 30000,
                append: '30 / 天',
                click: function () {
                  alert('弹窗');
                },
                list: ['30天的报工产品完成时间', '支持pc客户端', '支持vue的全部体系', '一个神奇的框架']
            }, {
                title: '产品D报工',
                price: 500000,
                append: '360 / 天',
                click: function () {
                  alert('弹窗');
                },
                list: ['360天的报工产品完成时间', '支持pc客户端', '支持vue的全部体系', '一个神奇的框架']
            }
            ]
        }
      }
    }
  }
</script>
<style>
    .threebtop{
        width: 1030px;
        margin: 10px 10px 10px 10px;
        box-shadow: 0 0 5px rgb(169, 167, 167);
    }
    .el-col-24 {
        padding:10px 10px 10px 10px;
    }
</style>