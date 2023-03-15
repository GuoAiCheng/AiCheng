<template>
    <avue-data-card :option="option"></avue-data-card>
  </template>
  <script>
  export default {
    data () {
      return {
        option: {
          span: 8,
          data: [
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              name: '产品1',
              src: '/src/assets/image/向日葵.png',
              text: 'xxxxxxxx',
              href: '#',
            //   target: '_blank'
            },
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              name: '产品2',
              src: '/src/assets/image/02.jpg',
              text: 'xxxxxx',
              href: '#',
            //   target: '_blank'
            },
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              name: '产品3',
              src: '/src/assets/image/03.jpg',
              text: 'xxxxx',
              href: '#',
            //   target: '_blank'、
            },
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              name: '产品4',
              src: '/src/assets/image/04.jpg',
              text: 'xxxxx',
              href: '#',
            //   target: '_blank'
            },
          ]
        },
      }
    }
  }
  </script>