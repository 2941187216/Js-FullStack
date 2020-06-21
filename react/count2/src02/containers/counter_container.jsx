import Counter from '../components/counter'
import {connect} from 'react-redux'
import {increment,decrement,incrementAsync} from '../redux/action_creators'
//从redux中把state取出，以props传参的方式给UI组件
// function mapStateToProps (state) {
//     // 该方法的返回值，会作为props参数传递
//     // 此行相当于：<Counter count={state}>
//     return {count: state}
// }
const mapStateToProps = state => ({count: state})
//从redux中把dispatch取出，以props传参的方式给UI组件
// function mapDispatchToProps (dispatch) {
//     // 该方法的返回值，会作为props参数传递
//     return {
//         //<Counter increment={操作状态的方法}>
//         increment: value => dispatch(increment(value)),
//         //<Counter increment={操作状态的方法}>
//         decrement: value => dispatch(decrement(value)),
//     }
// }
// const mapDispatchToProps = dispatch => ({
//         //<Counter increment={操作状态的方法}>
//         increment: value => dispatch(increment(value)),
//         //<Counter increment={操作状态的方法}>
//         decrement: value => dispatch(decrement(value)),
// })
/**
 * 1: 如下代码会生成一个容器组件
 * 2: 会映射redux中所保存的状态为props
 * 3: 会建立与UI组件的联系
 */

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default connect(
    state => ({count: state}),
    {increment,decrement,incrementAsync}
)(Counter)