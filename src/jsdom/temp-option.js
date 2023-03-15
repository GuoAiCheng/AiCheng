export default (safe)=>{
    console.log(safe) //vue的this对象
    return {
      index: true,
      align: 'center',
      headerAlign: 'center',
      border: true,
      stripe: true,
      column: [{
        label: "名称",
        prop: "name",
        search: true,
        rules: [{
          required: true,
          message: "请输入名称",
          trigger: "blur"
        }]
      }, {
        label: "值",
        prop: "value",
        search: true,
        rules: [{
          required: true,
          message: "请输入值",
          trigger: "blur"
        }]
      }, {
        label: "参数",
        prop: "code",
        search: true,
        rules: [{
          required: true,
          message: "请输入参数",
          trigger: "blur"
        }]
      }, {
        label: '备注',
        prop: 'note'
      }],
    }
  }