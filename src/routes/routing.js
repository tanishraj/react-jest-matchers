import Home from '../components/Home/home'
import Expect from '../components/expect/expect'
import ExpectExtend from '../components/expectExtend/expectExtend'

const routing = [
    {
        label: 'Home',
        path: '/',
        component: Home
    },
    {
        label: 'Expect',
        path: '/expect',
        component: Expect
    },
    {
        label: 'expect.extend(matchers)',
        path: '/expectExtend',
        component: ExpectExtend
    }
]

export default routing;