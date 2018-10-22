const articalReducer = (state,action)=>{
    if(!state) return{
        artical: [
            {
              title: '上海生活馆',
              desc: '上海生活馆是一家..........',
              content: 'first artical'
            },
            {
              title: '好好学习',
              desc: 'good good study',
              content: 'second artical'
            },
            {
              title: '天天向上',
              desc: 'day day up',
              content: 'third artical'
            },
            {
              title: '今天天气好晴朗',
              desc: '处处好风光',
              content: '好风光'
            }
        ]
    }
    switch (action,type){
        case 'ADD_ARTICAL':
            return {...state,artical:action.articalReducer}
        default:
            return state
    }
}