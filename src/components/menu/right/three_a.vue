<template>
    <div class="threetop">
      <avue-card :option="option"
               :data="data"
               @row-click="tip"
               @row-add="tip"
               style="padding: 10px 10px 10px 10px;">
            <template #menu="scope">
                <span @click.stop="tip(scope.row,scope.index)">操作1</span>
                <span @click.stop="tip(scope.row,scope.index)">操作2</span>
            </template>
        </avue-card>  
    </div>
  </template>
<script>
  export default {
    data () {
      return {
        option: {
          // addBtn:false,
          props: {
            img: 'img',
            title: 'title',
            info: 'text',
          }
        },
        data: [{
          title: 'Alipay',
          text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
        }, {
          title: 'Angular',
          text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'
        }, {
          title: 'Ant Design',
          text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png'
        }, {
          title: 'Ant Design Pro',
          text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'
        }, {
          title: 'Bootstrap',
          text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'
        }, {
          title: 'React',
          text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png'
        }, {
          title: 'Vue',
          text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png'
        }, {
          title: 'Webpack',
          text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        }]
      }
    },
    methods: {
      tip (row, index) {
        this.$message.success('查看控制台')
        console.log(row, index)
      }
    }
  }
  </script>

  <style>
  .threetop{
    margin: 10px 10px 10px 10px;
    box-shadow: 0 0 5px rgb(169, 167, 167);
  }
</style>