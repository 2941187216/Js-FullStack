import Counter from '../components/counter'
import {connect} from 'react-redux'
//从redux中把state取出，以props传参的方式给UI组件
function mapStateToProps (state) {
    // 该方法的返回值，会作为props参数传递
    //
    return {count: state}
}

export default connect(mapStateToProps)(Counter)